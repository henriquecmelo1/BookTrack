import { fastify } from 'fastify';
import { UserController } from '../controllers/user-controller.js';


const userController = new UserController();
const server = fastify();





server.get('/', (request, reply)=>{
    return 'hello world'
})


server.get('/users', userController.listUsers )

server.post('/users', userController.createUser )

server.put('/users/:id', userController.updateUser )

server.delete('/users/:id', userController.deleteUser )













server.listen({
  port: 3000,
});