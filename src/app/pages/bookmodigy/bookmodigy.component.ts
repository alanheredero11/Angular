import { Component, OnInit} from '@angular/core';
import { Libro } from "src/app/models/libro";
import { ServicioService } from "src/app/shared/servicio.service"
import { Router } from "@angular/router"
import Swal from 'sweetalert2'

@Component({
  selector: 'app-bookmodigy',
  templateUrl: './bookmodigy.component.html',
  styleUrls: ['./bookmodigy.component.css']
})
export class BookmodigyComponent {
  public libros: Libro[];

  constructor(public servicioLibro: ServicioService, private router: Router) {
    this.libros = servicioLibro.getAll()
  }

  public modify_book(ref: HTMLInputElement, titulo: HTMLInputElement, tipoLibro: HTMLInputElement, autor: HTMLInputElement,
    precio: HTMLInputElement, photo: HTMLInputElement){
    this.servicioLibro.edit(new Libro(Number(ref.value), 0, titulo.value, tipoLibro.value, autor.value, Number(precio.value), photo.value))
    
    Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Modificado con Exito',
    showConfirmButton: false,
    timer: 1500
})

    console.log(this.libros)

  }

  ngOnInit():void{}
}
