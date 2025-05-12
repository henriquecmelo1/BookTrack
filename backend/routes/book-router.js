import { BookController } from "../controllers/book-controller.js";
import { fastify } from 'fastify';

const bookController = new BookController();
const server = fastify();

server.get('/', (request, reply)=>{
    return 'hello book'
})

server.get('/books', bookController.listBooks )

server.post('/books', bookController.createBook )

// server.put('/books/:id', bookController.updateBook )

// server.delete('/books/:id', bookController.deleteBook )



server.listen({
  port: 3000,
});