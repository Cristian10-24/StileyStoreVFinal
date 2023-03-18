import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './ingreso/ingreso.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: '', component: IngresoComponent},
  { path: 'registrar', component: RegistroComponent},
  { path: '**', redirectTo: '/ingresar', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
