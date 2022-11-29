import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { RegistroComponent } from 'src/app/pages/registro/registro.component';
import { PerfilComponent } from 'src/app/pages/perfil/perfil.component'

const routes: Routes = [
  { path: "", component: HomeComponent }, { path: "registro", component: RegistroComponent }, { path: "perfil", component: PerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
