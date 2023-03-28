import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PerfilComponent } from './perfil/perfil.component';
import { InfoPerfilComponent } from './info-perfil/info-perfil.component';
import { DireccionesPerfilComponent } from './direcciones-perfil/direcciones-perfil.component';
import { PedidosPerfilComponent } from './pedidos-perfil/pedidos-perfil.component';
import { VistaPerfilComponent } from './vista-perfil/vista-perfil.component';
import { InicioLoginComponent } from './inicio-login/inicio-login.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    RegistroComponent,
    IngresoComponent,
    PerfilComponent,
    InfoPerfilComponent,
    DireccionesPerfilComponent,
    PedidosPerfilComponent,
    VistaPerfilComponent,
    InicioLoginComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
    
    
  ]
})
export class LoginModule { }
