import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AcercaDeNosotrosComponent } from './pages/acerca-de-nosotros/acerca-de-nosotros.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { VisionMisionComponent } from './components/vision-mision/vision-mision.component';
import { FcontactenosComponent } from './components/fcontactenos/fcontactenos.component';
import { CservicioComponent } from './components/cservicio/cservicio.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AcercaDeNosotrosComponent,
    HistoriaComponent,
    VisionMisionComponent,
    FcontactenosComponent,
    CservicioComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
