import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';

import { GeneralPagesRoutingModule } from './general-pages–routing.module';
import { GeneralPagesComponent } from './general-pages.component';
import { SharedModule } from '../shared/shared.module';




import { ContactosComponent } from './contactos/contactos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { EquipoDesarrolloComponent } from './equipo-desarrollo/equipo-desarrollo.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PreciosComponent } from './precios/precios.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { ProcesoComponent } from './proceso/proceso.component';



@NgModule({
  declarations: [GeneralPagesComponent,
    FilterPipe,
    ContactosComponent,
    NoticiasComponent,
    EquipoDesarrolloComponent,
    InicioComponent,
    ServiciosComponent,
    PreciosComponent,
    IngresoComponent,
    ProcesoComponent],
  imports: [
    CommonModule,
    FormsModule,
    GeneralPagesRoutingModule,
    SharedModule
  ]
})
export class GeneralPagesModule { }
