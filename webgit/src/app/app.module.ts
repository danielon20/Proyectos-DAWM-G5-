import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { EquipoDesarrolloComponent } from './pages/equipo-desarrollo/equipo-desarrollo.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { PreciosComponent } from './pages/precios/precios.component';
import { IngresoComponent } from './pages/ingreso/ingreso.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ProcesoComponent } from './pages/proceso/proceso.component';
import { MisCursosComponent } from './pages/mis-cursos/mis-cursos.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
//GRAFICOS
import { ChartsModule } from 'ng2-charts';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    ContactosComponent,
    EquipoDesarrolloComponent,
    CursosComponent,
    InicioComponent,
    ServiciosComponent,
    PreciosComponent,
    IngresoComponent,
    AdministradorComponent,
    FilterPipe,
    ProcesoComponent,
    MisCursosComponent,
    EstadisticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
