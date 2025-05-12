import { UserService } from '../services/user-service.js';



export class UserController {

    constructor() {
    this.userService = new UserService();
    this.listUsers = this.listUsers.bind(this);
    this.createUser = this.createUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
}
    
    

    async listUsers(request, reply) {
        const search = request.query.search;
        
        const users = await this.userService.list_users(search);
        return users

    }

    async createUser(request, reply) {
        const { nome, email } = request.body

        await this.userService.create_user({
            nome,
            email
        })

        return reply.status(201).send()
    }

    async updateUser(request, reply) {
        const { nome, email } = request.body

        const user_id = request.params.id

        await this.userService.update(user_id, {
            nome,
            email
        })

        return reply.status(204).send()
    }

    async deleteUser(request, reply) {
        const user_id = request.params.id

        await this.userService.delete(user_id)

        return reply.status(204).send()
    }
}