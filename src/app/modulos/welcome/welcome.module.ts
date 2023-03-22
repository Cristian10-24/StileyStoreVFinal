import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { PrimeraSesionComponent } from './componentes/primera-sesion/primera-sesion.component';
import { HomeSecundarioComponent } from './pages/home-secundario/home-secundario.component';
import { HeaderSecundarioComponent } from './componentes/header-secundario/header-secundario.component';


@NgModule({
  declarations: [
    HomeComponent,
    CarruselComponent,
    PrimeraSesionComponent,
    HomeSecundarioComponent,
    HeaderSecundarioComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    SharedModule
  ]
})
export class WelcomeModule { }
