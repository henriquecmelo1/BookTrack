export class User {
    constructor(nome, email, id = null) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}
