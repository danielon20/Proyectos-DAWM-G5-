import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HeaderdosComponent } from './components/headerdos/headerdos.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ToolbarComponent,
    HeaderdosComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HeaderComponent, FooterComponent,ToolbarComponent,HeaderdosComponent]
})
export class SharedModule { }
