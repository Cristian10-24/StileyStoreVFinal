import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactenosComponent } from '../shared/components/contactenos/contactenos.component';
import { HomeSecundarioComponent } from './pages/home-secundario/home-secundario.component';
import { HomeComponent } from './pages/home/home.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';

const routes: Routes = [
  { path: '', component: HomeSecundarioComponent },
  { path: 'home', component:HomeComponent },
  { path: 'Ofertas', component:OfertasComponent },
  { path: 'contactenos',  component:ContactenosComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
