import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminPagesRoutingModule } from './admin-pages–routing.module';
import { AdminPagesComponent } from './admin-pages.component';
import { SharedModule } from '../shared/shared.module';
//import { HeaderdosComponent } from '../shared/components/headerdos/headerdos.component'

import { AdministradorComponent } from './administrador/administrador.component';
import { MisCursosComponent } from './mis-cursos/mis-cursos.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';

import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [AdministradorComponent,
    MisCursosComponent,
    EstadisticasComponent,
    AdminPagesComponent
  ],
  imports: [
    CommonModule,AdminPagesRoutingModule,SharedModule,ChartsModule
  ]
})
export class AdminPagesModule { }
