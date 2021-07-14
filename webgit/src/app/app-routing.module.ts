import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactosComponent } from './pages/contactos/contactos.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { EquipoDesarrolloComponent } from './pages/equipo-desarrollo/equipo-desarrollo.component';

const routes: Routes = [
  {path:"noticias", component:NoticiasComponent},
  {path:"contactos", component:ContactosComponent},
  {path:"equipo", component:EquipoDesarrolloComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
