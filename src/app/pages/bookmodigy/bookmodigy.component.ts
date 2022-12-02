import { Component, OnInit} from '@angular/core';
import { Libro } from "src/app/models/libro";
import { ServicioService } from "src/app/shared/servicio.service"
import { Router } from "@angular/router"

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
    
    this.router.navigateByUrl("/libros")

    console.log(this.libros)

  }

  ngOnInit():void{}
}
