import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UbicacionHorariosComponent } from './components/ubicacion-horarios/ubicacion-horarios.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    UbicacionHorariosComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    UbicacionHorariosComponent
  ]
})
export class SharedModule { }
