import { sql } from "../database/db.js"; 
 
 export class UserService {

     
     async list_users(search){
        
        let users = []
        
        if (search){
            users = await sql`SELECT * FROM usuarios WHERE nome ILIKE ${'%' + search + '%'}`
        } else {
            users = await sql`SELECT * FROM usuarios`;
        }

    
        return users
    }

    async get_user(id){
        const user = await sql`SELECT * FROM usuarios WHERE id = ${id}`

        if (user.length === 0){
            throw new Error('Usuário não encontrado')
        }
        
        return user[0]
    }

    async create_user(user){
        
        await sql`
            INSERT INTO usuarios (nome, email) 
            VALUES (${user.nome}, ${user.email})
        `
    }

    // async update(id, user){
    //     await sql`
    //         UPDATE usuarios 
    //         SET nome = ${user.nome}, email = ${user.email}
    //         WHERE id = ${id}
    //     `
    // }

    async delete(id){
        await sql`
            DELETE FROM usuarios 
            WHERE id = ${id}
        `
    }

}