import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeNosotrosComponent } from './pages/acerca-de-nosotros/acerca-de-nosotros.component';
const routes: Routes = [
  { path: '', component: AcercaDeNosotrosComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
