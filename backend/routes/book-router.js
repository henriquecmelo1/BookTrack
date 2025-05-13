import { BookController } from "../controllers/book-controller.js";


export async function bookRouter(server) {
  const bookController = new BookController();

  server.get('/books', bookController.listBooks)

  server.get('/books/:id', bookController.getBook)
  
  server.post('/books', bookController.createBook)

  server.put('/books/:id/:id_usuario', bookController.updateBook)

  server.delete('/books/:id/:id_usuario', bookController.deleteBook)

}

