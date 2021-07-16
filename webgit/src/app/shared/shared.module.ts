import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent, FooterComponent,ToolbarComponent]
})
export class SharedModule { }
