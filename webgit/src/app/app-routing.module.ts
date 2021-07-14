import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';

const routes: Routes = [
  { path:"noticias", component:NoticiasComponent},
  { path:"contactos", component:ContactosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
