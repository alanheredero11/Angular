import { Component } from '@angular/core';
import { Libro } from "src/app/models/libro";
import { ServicioService } from "src/app/shared/servicio.service"
import { Router } from "@angular/router"

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.css']
})
export class ShowBooksComponent {
public libros: Libro[];

  constructor(public servicioLibro: ServicioService, private router: Router) {
    this.libros = servicioLibro.getAll()
  }

  public delete(ref: number){
    this.servicioLibro.delete(ref)
    // this.libros = this.servicioLibro.getOne(Number(ref))
    

  }

  public search(ref: HTMLInputElement){
    if (Number(ref.value) == 0){
      this.libros = this.servicioLibro.getAll()
    }else{
    this.libros = this.servicioLibro.getOne(Number(ref.value))
  }
  console.log(ref)
  }
}
