import { Component, OnInit } from '@angular/core';
import { Libro } from "src/app/models/libro";
import { ServicioService } from "src/app/shared/servicio.service"
import { Router } from "@angular/router"
import Swal from 'sweetalert2'

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  public libros: Libro[];

  constructor(public servicioLibro: ServicioService, private router: Router) {
    this.libros = servicioLibro.getAll()
  }

  public add_book(ref: HTMLInputElement, titulo: HTMLInputElement, tipoLibro: HTMLInputElement, autor: HTMLInputElement, 
   precio: HTMLInputElement, photo: HTMLInputElement) {

    this.servicioLibro.add(new Libro(Number(ref.value), 0, titulo.value, tipoLibro.value, autor.value, Number(precio.value), photo.value))

    // let nuevo_libro = new Libro(Number(ref.value), 0, titulo.value, tipoLibro.value, autor.value, Number(precio.value), photo.value);
    // this.libros.push(nuevo_libro)   

    Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Añadido con Exito',
    showConfirmButton: false,
    timer: 1500
   })

  }

  

  
  ngOnInit(): void { }
}
