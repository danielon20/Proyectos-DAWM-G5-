import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ClientPagesRoutingModule } from './client-pages–routing.module';
import { ClientPagesComponent } from './client-pages.component';
import { SharedModule } from '../shared/shared.module';
//import { HeaderdosComponent } from '../shared/components/headerdos/headerdos.component'

import { CursosComponent } from './cursos/cursos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { VistaCursoComponent } from './vista-curso/vista-curso.component';
import { TodosCursosClientesComponent } from './todos-cursos-clientes/todos-cursos-clientes.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [CursosComponent,
    PerfilComponent,
    VistaCursoComponent,
    ClientPagesComponent,
    TodosCursosClientesComponent,
    ReportesComponent
  ],
  imports: [
    CommonModule,ClientPagesRoutingModule,SharedModule,ChartsModule
  ]
})
export class ClientPagesModule { }
