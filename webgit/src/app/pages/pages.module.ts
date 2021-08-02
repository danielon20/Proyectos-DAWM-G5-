import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
//import { AppModule } from '../app.module'




@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
    ],
  exports:[]
})
export class PagesModule { }
