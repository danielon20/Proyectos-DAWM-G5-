import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactosComponent } from './contactos/contactos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { EquipoDesarrolloComponent } from './equipo-desarrollo/equipo-desarrollo.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PreciosComponent } from './precios/precios.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { ProcesoComponent } from './proceso/proceso.component';
import { GeneralPagesComponent } from './general-pages.component';



const routes: Routes = [
  {path:"", component:GeneralPagesComponent,
  children:[
  {path:"", component:InicioComponent},
  {path:"inicio", component:InicioComponent},
  {path:"noticias", component:NoticiasComponent},
  {path:"contactos", component:ContactosComponent},
  {path:"equipo", component:EquipoDesarrolloComponent},
  {path:"servicios", component:ServiciosComponent},
  {path:"precios", component:PreciosComponent},
  {path:"ingreso", component:IngresoComponent},
  {path:"proceso", component:ProcesoComponent}
]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GeneralPagesRoutingModule { }
