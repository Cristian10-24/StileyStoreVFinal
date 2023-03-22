import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSecundarioComponent } from './pages/home-secundario/home-secundario.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeSecundarioComponent },
  { path: 'home', component:HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
