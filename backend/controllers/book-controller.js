import { BookService } from "../services/book-service.js";
import { Book } from "../models/book-model.js";
import { writeFile } from 'fs/promises';
import path from 'path';


export class BookController {
    constructor() {
        this.bookService = new BookService();
        this.listBooks = this.listBooks.bind(this);
        this.getBook = this.getBook.bind(this);
        this.exportBooks = this.exportBooks.bind(this);
        this.createBook = this.createBook.bind(this);
        this.updateBook = this.updateBook.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
    }


    async listBooks(request, reply) {
        const search = request.query.titulo;

        const books = await this.bookService.list_books(search);
        return books
    }

    async exportBooks(request, reply) {
        const search = request.query.search;
        const books = await this.bookService.list_books(search);

        const jsonPath = path.resolve('data', 'books.json');
        const jsonData = JSON.stringify(books, null, 2);
        await writeFile(jsonPath, jsonData);
        return books;
    }

    async getBook(request, reply) {
        const id = request.params.id;
        const book = await this.bookService.get_book(id);
        if (!book) {
            return reply.status(404).send({ message: 'Livro não encontrado' });
        }
        return book
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

        if (newBook.status == 'Lido' && newBook.data_conclusao == null) {
            newBook.data_conclusao = new Date()
        }

    
        


        await this.bookService.create_book(newBook)

        return reply.status(201).send()
    }
    
    async updateBook(request, reply) {
        const id = request.params.id;
        const id_usuario = request.params.id_usuario;

        const book = await this.bookService.get_book(id);
        if (!book) {
            return reply.status(404).send({ message: 'Livro não encontrado' });
        } else if (book.usuario_id != id_usuario) {
            return reply.status(403).send({ message: `O usuário com id ${id_usuario} não tem permissão para editar este livro` });
        } else if (book.status == 'Lido'){
            return reply.status(403).send({ message: `O livro já foi lido, não é possível editar` });
        }

        const bookData = {
            id: id,
            titulo : request.body.titulo,
            autor : request.body.autor || null,
            status : request.body.status,
            avaliacao : request.body.avaliacao || null,
            data_conclusao : request.body.data_conclusao || null,
            usuario_id : request.body.usuario_id
        }

        const updatedBook = new Book(...Object.values(bookData))

        if (book.status != 'Lido' && updatedBook.status == 'Lido') {
            updatedBook.data_conclusao = new Date()
        }

        await this.bookService.update_book(id, updatedBook)
        return reply.status(204).send()
        

        
    }


    async deleteBook(request, reply) {
        const id = request.params.id;
        const id_usuario = request.params.id_usuario;

        const book = await this.bookService.get_book(id);
        if (!book) {
            return reply.status(404).send({ message: 'Livro não encontrado' });
        } else if (book.usuario_id != id_usuario) {
            return reply.status(403).send({ message: `O usuário com id ${id_usuario} não tem permissão para deletar este livro` });
        }

        await this.bookService.delete(id)
        return reply.status(204).send()
    }




}