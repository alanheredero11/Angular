import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../models/usuario";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public user: Usuario;

  constructor()
  {
    this.user = new Usuario(1, "Alan", "Heredero Rangel", "alanheredero11@gmail.com", "https://images.pexels.com/photos/9929131/pexels-photo-9929131.jpeg?auto=compress&cs=tinysrgb&w=1600", "12345678")
  }

  public complete_name(){
    return this.user.nombre + " " + this.user.apellidos
  }

  public modificar_datos(nuevo_nombre: HTMLInputElement, nuevo_apellidos: HTMLInputElement, nuevo_correo: HTMLInputElement, nueva_foto: HTMLInputElement){
    
    if (nuevo_nombre.value == ""){
      this.user.nombre = this.user.nombre;
    }
    else{
    this.user.nombre = nuevo_nombre.value;
    }
    
    if (nuevo_apellidos.value == "") {
      this.user.apellidos = this.user.apellidos;
    }
    else {
      this.user.apellidos = nuevo_apellidos.value;
    }

    if (nuevo_correo.value == "") {
      this.user.correo = this.user.correo;
    }
    else {
      this.user.correo = nuevo_correo.value;
    }

    if (nueva_foto.value == "") {
      this.user.url = this.user.url;
    }
    else {
      this.user.url = nueva_foto.value;
    }

    // if (nuevo_nombre.value == "" && nuevo_apellidos.value == "" && nuevo_correo.value == "" && nueva_foto.value == ""){
    //   alert("No se ha indicado nueva información")
    // }
    // else{
    //   alert("Usuario actualizado")
    // }
    
  }

  ngOnInit():void{

  }
}
