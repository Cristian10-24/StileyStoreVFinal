import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DireccionesPerfilComponent } from './direcciones-perfil/direcciones-perfil.component';
import { InfoPerfilComponent } from './info-perfil/info-perfil.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { PedidosPerfilComponent } from './pedidos-perfil/pedidos-perfil.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';
import { VistaPerfilComponent } from './vista-perfil/vista-perfil.component';

const routes: Routes = [
  { path: '', component: IngresoComponent},
  { path: 'registrar', component: RegistroComponent},
  {path:'perfil',component:PerfilComponent,
children:[
  {path:'info-perfil',component:InfoPerfilComponent},
  {path:'pedidos',component:PedidosPerfilComponent},
  {path:'direcciones',component:DireccionesPerfilComponent}
]},
{path:'datos-perfil',component:VistaPerfilComponent,
children:[
  {path:'datos',component:PerfilComponent}
]},
  { path: '**', redirectTo: '/ingresar', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
