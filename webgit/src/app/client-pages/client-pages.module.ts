import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ClientPagesRoutingModule } from './client-pages–routing.module';
import { ClientPagesComponent } from './client-pages.component';
import { SharedModule } from '../shared/shared.module';
//import { HeaderdosComponent } from '../shared/components/headerdos/headerdos.component'

import { CursosComponent } from './cursos/cursos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { VistaCursoComponent } from './vista-curso/vista-curso.component';

import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [CursosComponent,
    PerfilComponent,
    VistaCursoComponent,
    ClientPagesComponent
  ],
  imports: [
    CommonModule,ClientPagesRoutingModule,SharedModule,ChartsModule
  ]
})
export class ClientPagesModule { }
