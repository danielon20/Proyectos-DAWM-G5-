import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralPagesComponent } from './general-pages/general-pages.component';
import { AdminPagesComponent  } from './admin-pages/admin-pages.component'
import { CheckLoginGuard } from './shared/guards/guardGeneral/check-login.guard';
import { CheckAdminGuard } from './shared/guards/guardAdmin/check-admin.guard';
//import { CheckLoginGuard } from './shared/guards/check-login.guard';



const routes: Routes = [
  { path: '',
  loadChildren: () =>
  import('./general-pages/general-pages.module').then((m) => m.GeneralPagesModule),canActivate:[CheckAdminGuard]},
  { path: 'admin',
  loadChildren: () =>
  import('./admin-pages/admin-pages.module').then((m) => m.AdminPagesModule),canActivate:[CheckLoginGuard]}
  //{path:"", component:GeneralPagesComponent},
  //{path:"admin", component:AdminPagesComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }


