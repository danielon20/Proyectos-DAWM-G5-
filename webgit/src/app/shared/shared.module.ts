import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent]
})
export class SharedModule { }
