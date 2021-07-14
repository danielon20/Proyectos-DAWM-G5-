import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipoDesarrolloComponent } from './pages/equipo-desarrollo/equipo-desarrollo.component';

const routes: Routes = [
  {path:"equipo", component:EquipoDesarrolloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
