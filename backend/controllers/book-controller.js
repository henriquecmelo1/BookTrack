import { BookService } from "../services/book-service.js";
import { Book } from "../models/book-model.js";

export class BookController {
    constructor() {
        this.bookService = new BookService();
        this.listBooks = this.listBooks.bind(this);
        this.createBook = this.createBook.bind(this);
        // this.updateBook = this.updateBook.bind(this);
        // this.deleteBook = this.deleteBook.bind(this);
    }


    async listBooks(request, reply) {
        const search = request.query.search;

        const books = await this.bookService.list_books(search);
        return books
    }

    async createBook(request, reply) {
        

        const bookData = {
            id: null,
            titulo : request.body.titulo,
            autor : request.body.autor || null,
            status : request.body.status,
            avaliacao : request.body.avaliacao || null,
            data_conclusao : request.body.data_conclusao || null,
            usuario_id : request.body.usuario_id || null
        }

        const newBook = new Book(...Object.values(bookData))

        console.log(newBook);
        


        await this.bookService.create_book(newBook)

        return reply.status(201).send()
    }





}