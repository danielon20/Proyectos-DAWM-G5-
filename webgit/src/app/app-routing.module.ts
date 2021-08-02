 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactosComponent } from './pages/contactos/contactos.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { EquipoDesarrolloComponent } from './pages/equipo-desarrollo/equipo-desarrollo.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { PreciosComponent } from './pages/precios/precios.component';
import { IngresoComponent } from './pages/ingreso/ingreso.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { ProcesoComponent } from './pages/proceso/proceso.component';
import { MisCursosComponent } from './pages/mis-cursos/mis-cursos.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';

const routes: Routes = [
  {path:"", component:InicioComponent},
  {path:"noticias", component:NoticiasComponent},
  {path:"contactos", component:ContactosComponent},
  {path:"equipo", component:EquipoDesarrolloComponent},
  {path:"servicios", component:ServiciosComponent},
  {path:"inicio", component:InicioComponent},
  {path:"precios", component:PreciosComponent},
  {path:"ingreso", component:IngresoComponent},
  {path:"admin", component:AdministradorComponent},
  {path:"proceso", component:ProcesoComponent},
  {path:"mis-cursos", component:MisCursosComponent},
  {path:"estadistica", component:EstadisticasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})




export class AppRoutingModule { }


