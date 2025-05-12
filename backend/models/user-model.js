export class User {
    constructor(name, email, id = null) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
