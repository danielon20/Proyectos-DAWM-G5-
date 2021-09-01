import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HeaderdosComponent } from './components/headerdos/headerdos.component';
import { ClientToolbarComponent } from './components/client-toolbar/client-toolbar.component';
import { ClientHeaderComponent } from './components/client-header/client-header.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ToolbarComponent,
    HeaderdosComponent,
    ClientToolbarComponent,
    ClientHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HeaderComponent, FooterComponent,ToolbarComponent,HeaderdosComponent,ClientToolbarComponent,ClientHeaderComponent]
})
export class SharedModule { }
