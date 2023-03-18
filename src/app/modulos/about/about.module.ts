import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AcercaDeNosotrosComponent } from './pages/acerca-de-nosotros/acerca-de-nosotros.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { VisionMisionComponent } from './components/vision-mision/vision-mision.component';


@NgModule({
  declarations: [
    AcercaDeNosotrosComponent,
    HistoriaComponent,
    VisionMisionComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
