import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSecundarioComponent } from './pages/home-secundario/home-secundario.component';
import { HomeComponent } from './pages/home/home.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';

const routes: Routes = [
  { path: '', component: HomeSecundarioComponent },
  { path: 'home', component:HomeComponent },
  { path: 'Ofertas', component:OfertasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
