import { Injectable } from '@angular/core';
import { Libro } from "src/app/models/libro"

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private libro: Libro[];
  constructor() { 
    this.libro = [new Libro(100001, 0, "La Sombra en la tormenta", "Tapa Blanda", "Johan Anderson", 49.99, "https://images.unsplash.com/photo-1471440671318-55bdbb772f93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80")
    ,
      new Libro(100002
        , 0, "La Sombra en la tormenta", "Tapa Blanda", "Johan Anderson", 49.99,  "https://images.unsplash.com/photo-1471440671318-55bdbb772f93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80")
    ]

  }

  public getAll():Libro[]{
    
    return this.libro
  }

  public getOne(id_libro: number): Libro[]{

    let libro_resultado: Libro[] = []; 
    for(let i = 0; i < this.libro.length; i++){
      if (this.libro[i].id_libro == id_libro){
        libro_resultado.push(this.libro[i])
        
      }
    }
    return libro_resultado
  }
  
  public add(libro: Libro): void{
    let resultado = 0;
    for (let i = 0; i < this.libro.length; i++) {
      if(this.libro[i].id_libro == libro.id_libro){
        resultado = 1

      }
      }
    if(resultado == 0){
      this.libro.push(libro)
    }
    else{
      alert("Este libro ya existe")
    }

  }

  public edit(libro: Libro): boolean{

    let libro_resultado: Libro = null;
    for (let i = 0; i < this.libro.length; i++) {
      if (this.libro[i].id_libro == libro.id_libro) {
        libro_resultado = this.libro[i]
        i = this.libro.length
      }
    }

    let resultado: boolean;
    if (libro_resultado == null) {
      resultado = false
    } else {

      if (libro.id_usuario != 0){
      libro_resultado.id_usuario = libro.id_usuario;
      }else{
        libro_resultado.id_usuario = libro_resultado.id_usuario 
      }

      if (libro.titulo != "") {
        libro_resultado.titulo = libro.titulo;
      } else {
        libro_resultado.titulo = libro_resultado.titulo
      }

      if (libro.tipoLibro != "") {
        libro_resultado.tipoLibro = libro.tipoLibro;
      } else {
        libro_resultado.tipoLibro = libro_resultado.tipoLibro
      }

      if (libro.autor != "") {
        libro_resultado.autor = libro.autor;
      } else {
        libro_resultado.autor = libro_resultado.autor
      }

      if (libro.precio != 0) {
        libro_resultado.precio = libro.precio;
      } else {
        libro_resultado.precio = libro_resultado.precio
      }

      if (libro.photo != "") {
        libro_resultado.photo = libro.photo;
      } else {
        libro_resultado.photo = libro_resultado.photo
      }      
      
    }
    console.log(resultado)
    return resultado
   

  }

  public delete(id_libro: number): boolean{
    
    let resultado = false;
    for (let i = 0; i < this.libro.length; i++) {
      if (this.libro[i].id_libro == id_libro) {
        this.libro.splice(i, 1)
        resultado = true
        i = this.libro.length
      }
    }
    
    return resultado;
    }
}
