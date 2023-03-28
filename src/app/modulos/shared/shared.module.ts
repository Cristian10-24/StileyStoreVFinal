import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { UbicacionHorariosComponent } from './components/ubicacion-horarios/ubicacion-horarios.component';
// Importaciones de Angular Material
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CartComponent } from '../producto/components/cart/cart.component';





@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    UbicacionHorariosComponent,
    CartComponent
  ],
  imports: [
      CommonModule,
      RouterModule,
      // Módulos de Angular Material
      MatFormFieldModule,
      MatButtonModule,
      MatIconModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatToolbarModule,
      MatInputModule,
      MatSnackBarModule,
      MatTooltipModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    UbicacionHorariosComponent,
      FooterComponent,
      HeaderComponent,
      CartComponent,
     // Módulos de Angular Material
      MatFormFieldModule,
      MatButtonModule,
      MatIconModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatToolbarModule,
      MatInputModule,
      MatSnackBarModule,
      MatTooltipModule,
  ],
})

export class SharedModule { }
