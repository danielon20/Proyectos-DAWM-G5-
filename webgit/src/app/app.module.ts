import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { FilterPipe } from './pipes/filter.pipe';

//import { CheckLoginGuard } from './shared/guards/check-login.guard';


import { UsuariosService } from './services/usuarios.service';
//GRAFICOS
//import { ChartsModule } from 'ng2-charts';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { GeneralPagesComponent } from './general-pages/general-pages.component';
//import { AdminPagesComponent } from './admin-pages/admin-pages.component';

@NgModule({
  declarations: [
    AppComponent
    //FilterPipe,
    //GeneralPagesComponent,
    //AdminPagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule,


    //FormsModule,
    //ChartsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),


    BrowserAnimationsModule
  ],

  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
