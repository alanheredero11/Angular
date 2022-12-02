import { Component } from '@angular/core';
import { Libro } from "src/app/models/libro";

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  public libros: Libro[];

  constructor() {
    this.libros = [
      new Libro(null, null, "La Sombra en la tormenta", "Tapa Blanda", "Johan Anderson", 49.99, "https://images.unsplash.com/photo-1471440671318-55bdbb772f93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"),

      new Libro(null, null, "La Sombra en la tormenta", "Tapa Blanda", "Johan Anderson", 49.99, "https://images.unsplash.com/photo-1471440671318-55bdbb772f93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80")
    ]
  }

  public add_book(ref: HTMLInputElement, titulo: HTMLInputElement, tipoLibro: HTMLInputElement, autor: HTMLInputElement, precio: HTMLInputElement, photo: HTMLInputElement) {

    let nuevo_libro = new Libro(Number(ref.value), 0, titulo.value, tipoLibro.value, autor.value, Number(precio.value), photo.value);
    this.libros.push(nuevo_libro)
  }
}
