import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactosComponent } from './pages/contactos/contactos.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { EquipoDesarrolloComponent } from './pages/equipo-desarrollo/equipo-desarrollo.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { PreciosComponent } from './pages/precios/precios.component';

const routes: Routes = [
  {path:"noticias", component:NoticiasComponent},
  {path:"contactos", component:ContactosComponent},
  {path:"equipo", component:EquipoDesarrolloComponent},
  {path:"", component:InicioComponent},
  {path:"servicios", component:ServiciosComponent},
  {path:"inicio", component:InicioComponent},
  {path:"precios", component:PreciosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
