export class Book {
    constructor(id=null, titulo, autor=null, status, avaliacao=null, data_conclusao=null, usuario_id=null) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.status = status;
        this.avaliacao = avaliacao;
        this.data_conclusao = data_conclusao;
        this.usuario_id = usuario_id;
    }
}




