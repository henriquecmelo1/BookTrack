import { sql } from "../database/db.js";

export class BookService {

    async list_books(search) {
        let books = []

        if (search) {
            books = await sql`SELECT * FROM livros WHERE titulo ILIKE ${'%' + search + '%'}`
        } else {
            books = await sql`SELECT * FROM livros`;
        }

        return books
    }

    async get_book(id) {
        const book = await sql`SELECT * FROM livros WHERE id = ${id}`

        if (book.length === 0) {
            throw new Error('Livro não encontrado')
        }

        return book[0]
    }

    async create_book(book) {
        await sql`
            INSERT INTO livros (titulo, autor, status, avaliacao, data_conclusao, usuario_id) 
            VALUES (${book.titulo}, ${book.autor}, ${book.status}, ${book.avaliacao}, ${book.data_conclusao}, ${book.usuario_id})
        `
    }

    async update_book(id, book) {
        await sql`
            UPDATE livros 
            SET titulo = ${book.titulo}, 
                autor = ${book.autor}, 
                status = ${book.status}, 
                avaliacao = ${book.avaliacao}, 
                data_conclusao = ${book.data_conclusao}, 
                usuario_id = ${book.usuario_id} 
            WHERE id = ${id}
        `
    }

    async delete(id) {
        await sql`
            DELETE FROM livros 
            WHERE id = ${id}
        `
    }

}
