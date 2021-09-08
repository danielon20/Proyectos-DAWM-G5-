import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosComponent } from './cursos/cursos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { VistaCursoComponent } from './vista-curso/vista-curso.component';
import { TodosCursosClientesComponent} from './todos-cursos-clientes/todos-cursos-clientes.component';
import { ReportesComponent } from './reportes/reportes.component';
import { InscripcionComponent } from "./inscripcion/inscripcion.component";
import { ClientPagesComponent } from './client-pages.component';


const routes: Routes = [
  {path:"", component:ClientPagesComponent,
  children:[
    {path:"", component:CursosComponent},
    {path:"perfil", component:PerfilComponent},
    {path:"vista-curso", component:VistaCursoComponent},
    {path:"todos-cursos-clientes", component:TodosCursosClientesComponent},
    {path:"reportes", component:ReportesComponent},
    {path:"inscripciones", component:InscripcionComponent}
  ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClientPagesRoutingModule { }
