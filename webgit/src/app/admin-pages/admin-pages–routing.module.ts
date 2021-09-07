import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministradorComponent } from './administrador/administrador.component';
import { MisCursosComponent } from './mis-cursos/mis-cursos.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { ReportesComponent } from './reportes/reportes.component';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';

import { AdminPagesComponent } from './admin-pages.component'


const routes: Routes = [
  {path:"", component:AdminPagesComponent,
  children:[
    {path:"", component:AdministradorComponent},
    {path:"mis-cursos", component:MisCursosComponent},
    {path:"estadistica", component:EstadisticasComponent},
    {path:"reportes", component:ReportesComponent},
    {path: "nuevo-curso", component:NuevoCursoComponent}
  ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminPagesRoutingModule { }
