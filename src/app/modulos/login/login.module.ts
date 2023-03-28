import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PerfilComponent } from './perfil/perfil.component';
import { InfoPerfilComponent } from './info-perfil/info-perfil.component';
import { DireccionesPerfilComponent } from './direcciones-perfil/direcciones-perfil.component';
import { PedidosPerfilComponent } from './pedidos-perfil/pedidos-perfil.component';
import { VistaPerfilComponent } from './vista-perfil/vista-perfil.component';


@NgModule({
  declarations: [
    RegistroComponent,
    IngresoComponent,
    PerfilComponent,
    InfoPerfilComponent,
    DireccionesPerfilComponent,
    PedidosPerfilComponent,
    VistaPerfilComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
