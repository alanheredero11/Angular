export class Libro {
    public id_libro: number
    public id_usuario: number
    public titulo: string
    public tipoLibro: string
    public autor: string
    public precio: number
    public photo: string

    constructor(id_libro: number, id_usuario: number, titulo: string, tipoLibro: string, autor: string, precio: number, photo: string){

        if(id_libro != null){
            this.id_libro = id_libro
        }else{
            this.id_libro = 0
        }

        if (id_usuario != null) {
            this.id_usuario = id_usuario
        } else {
            this.id_usuario = 0
        }

        this.titulo = titulo
        this.tipoLibro = tipoLibro
        this.autor = autor
        this.precio = precio
        this.photo = photo
    }
}
