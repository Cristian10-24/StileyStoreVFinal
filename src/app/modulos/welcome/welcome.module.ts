import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { PrimeraSesionComponent } from './componentes/primera-sesion/primera-sesion.component';
import { HomeSecundarioComponent } from './pages/home-secundario/home-secundario.component';
import { HeaderSecundarioComponent } from './componentes/header-secundario/header-secundario.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { Carrusel2Component } from './pages/ofertas/carrusel2/carrusel2.component';
import { Seccion1Component } from './pages/ofertas/seccion1/seccion1.component';
import { Seccion2Component } from './pages/ofertas/seccion2/seccion2.component';
import { Seccion3Component } from './pages/ofertas/seccion3/seccion3.component';
import { ContactenosComponent } from '../shared/components/contactenos/contactenos.component';


@NgModule({
  declarations: [
    HomeComponent,
    CarruselComponent,
    PrimeraSesionComponent,
    HomeSecundarioComponent,
    HeaderSecundarioComponent,
    OfertasComponent,
    Carrusel2Component,
    Seccion1Component,
    Seccion2Component,
    Seccion3Component,
    ContactenosComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    SharedModule

  ]
})
export class WelcomeModule { }
