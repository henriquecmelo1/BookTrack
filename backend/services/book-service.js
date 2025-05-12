import { sql } from "../database/db.js";

export class BookService {

    async list_books(search) {
        let books = []

        if (search) {
            books = await sql`SELECT * FROM livros WHERE nome ILIKE ${'%' + search + '%'}`
        } else {
            books = await sql`SELECT * FROM livros`;
        }

        return books
    }

    async create_book(book) {
        await sql`
            INSERT INTO livros (titulo, autor, status, avaliacao, data_conclusao, usuario_id) 
            VALUES (${book.titulo}, ${book.autor}, ${book.status}, ${book.avaliacao}, ${book.data_conclusao}, ${book.usuario_id})
        `
    }

    // async update(id, book) {
    //     await sql`
    //         UPDATE livros 
    //         SET nome = ${book.nome}, autor = ${book.autor}, editora = ${book.editora}, ano = ${book.ano}
    //         WHERE id = ${id}
    //     `
    // }

    async delete(id) {
        await sql`
            DELETE FROM livros 
            WHERE id = ${id}
        `
    }

}
