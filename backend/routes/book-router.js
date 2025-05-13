import { BookController } from "../controllers/book-controller.js";
import { fastify } from 'fastify';

const bookController = new BookController();
const server = fastify();

server.get('/', (request, reply)=>{
    return 'hello book'
})

server.get('/books', bookController.listBooks )

server.post('/books', bookController.createBook )

server.get('/books/:id', bookController.getBook )

server.put('/books/:id/:id_usuario', bookController.updateBook )

server.delete('/books/:id/:id_usuario', bookController.deleteBook )



server.listen({
  port: 3000,
});