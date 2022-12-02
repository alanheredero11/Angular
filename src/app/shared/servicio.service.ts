import { Injectable } from '@angular/core';
import { Libro } from "src/app/models/libro"

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private libro: Libro[];
  constructor() { }

  public getAll():Libro[]{
    
    return this.libro
  }

  public getOne(id_libro: number): Libro{

    let libro_resultado: Libro = null; 
    for(let i = 0; i < this.libro.length; i++){
      if (this.libro[i].id_libro == id_libro){
        libro_resultado = this.libro[i]
        i = this.libro.length
      }
    }
    return libro_resultado
  }
  
  public add(libro: Libro): void{
    let resultado = 0;
    for (let i = 0; i < this.libro.length; i++) {
      if(this.libro[i].id_libro = libro.id_libro){
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

      if (libro.id_usuario != null || libro.id_usuario != undefined){
      libro_resultado.id_usuario = libro.id_usuario;
      }else{
        libro_resultado.id_usuario = libro_resultado.id_usuario 
      }

      if (libro.titulo != null || libro.titulo != undefined) {
        libro_resultado.titulo = libro.titulo;
      } else {
        libro_resultado.titulo = libro_resultado.titulo
      }

      if (libro.tipoLibro != null || libro.tipoLibro != undefined) {
        libro_resultado.tipoLibro = libro.tipoLibro;
      } else {
        libro_resultado.tipoLibro = libro_resultado.tipoLibro
      }

      if (libro.autor != null || libro.autor != undefined) {
        libro_resultado.autor = libro.autor;
      } else {
        libro_resultado.autor = libro_resultado.autor
      }

      if (libro.precio != null || libro.precio != undefined) {
        libro_resultado.precio = libro.precio;
      } else {
        libro_resultado.precio = libro_resultado.precio
      }

      if (libro.photo != null || libro.photo != undefined) {
        libro_resultado.photo = libro.photo;
      } else {
        libro_resultado.photo = libro_resultado.photo
      }      
      
    }
    
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
