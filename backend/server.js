import { fastify } from 'fastify';
import { DatabasePostgreSQL } from './database-postgresql.js';

const db = new DatabasePostgreSQL();

const server = fastify();




server.get('/', (request, reply)=>{
    return 'hello world'
})


server.get('/users', async (request, reply)=>{
  const search = request.query.search
   
  

  const users = await db.list_users(search)
  return users
})

server.post('/users', async (request, reply)=>{

  const { nome, email } = request.body

  await db.create_user({
    nome,
    email
  })

  return reply.status(201).send()

})

server.put('/users/:id', async (request, reply)=>{

  const { nome, email } = request.body

  const user_id = request.params.id

  await db.update(user_id, {
    nome,
    email
  })

  return reply.status(204).send()
})

server.delete('/users/:id', async (request, reply)=>{
  const user_id = request.params.id

  await db.delete(user_id)

  return reply.status(204).send()
})













server.listen({
  port: 3000,
});