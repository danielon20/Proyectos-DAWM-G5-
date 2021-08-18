import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralPagesComponent } from './general-pages/general-pages.component';
import { AdminPagesComponent  } from './admin-pages/admin-pages.component'



const routes: Routes = [
  { path: '',
  loadChildren: () =>
  import('./general-pages/general-pages.module').then((m) => m.GeneralPagesModule),},
  { path: 'admin',
  loadChildren: () =>
  import('./admin-pages/admin-pages.module').then((m) => m.AdminPagesModule),}
  //{path:"", component:GeneralPagesComponent},
  //{path:"admin", component:AdminPagesComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }


