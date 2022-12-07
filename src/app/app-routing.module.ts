import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { RegistroComponent } from 'src/app/pages/registro/registro.component';
import { PerfilComponent } from 'src/app/pages/perfil/perfil.component';
import { LibrosComponent } from "src/app/pages/libros/libros.component";
import { BookmodigyComponent } from "src/app/pages/bookmodigy/bookmodigy.component";
import { ShowBooksComponent } from "src/app/pages/show-books/show-books.component";


const routes: Routes = [
  { path: "", component: HomeComponent }, 
  { path: "registro", component: RegistroComponent }, 
  { path: "perfil", component: PerfilComponent },
  { path: "libros", component: LibrosComponent },
  { path: "modificar_libro", component: BookmodigyComponent },
  { path: "show_books", component: ShowBooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
