import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminPagesRoutingModule } from './admin-pages–routing.module';
import { AdminPagesComponent } from './admin-pages.component';
import { SharedModule } from '../shared/shared.module';
//import { HeaderdosComponent } from '../shared/components/headerdos/headerdos.component'

import { AdministradorComponent } from './administrador/administrador.component';
import { MisCursosComponent } from './mis-cursos/mis-cursos.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { ReportesComponent } from './reportes/reportes.component';

import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [AdministradorComponent,
    MisCursosComponent,
    EstadisticasComponent,
    AdminPagesComponent,
    ReportesComponent
  ],
  imports: [
    CommonModule,AdminPagesRoutingModule,SharedModule,ChartsModule,NgbModule
  ]
})
export class AdminPagesModule { }
