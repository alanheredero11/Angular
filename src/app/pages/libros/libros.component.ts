import { Component, OnInit } from '@angular/core';
import { Libro } from "src/app/models/libro";
import { ServicioService } from "src/app/shared/servicio.service"

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  public libros: Libro[];

  constructor(public servicioLibro: ServicioService) {
    this.libros = servicioLibro.getAll()
  }

  public add_book(ref: HTMLInputElement, titulo: HTMLInputElement, tipoLibro: HTMLInputElement, autor: HTMLInputElement, 
   precio: HTMLInputElement, photo: HTMLInputElement) {

    this.servicioLibro.add(new Libro(Number(ref.value), 0, titulo.value, tipoLibro.value, autor.value, Number(precio.value), photo.value))

    // let nuevo_libro = new Libro(Number(ref.value), 0, titulo.value, tipoLibro.value, autor.value, Number(precio.value), photo.value);
    // this.libros.push(nuevo_libro)   
  }

  public delete(ref: number){
    this.servicioLibro.delete(ref)
  }

  public search(ref: HTMLInputElement){
    if (Number(ref.value) == 0){
      this.libros = this.servicioLibro.getAll()
    }else{
    this.libros = this.servicioLibro.getOne(Number(ref.value))
  }
  console.log(ref)
  }
  ngOnInit(): void { }
}
