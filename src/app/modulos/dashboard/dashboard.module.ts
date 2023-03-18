import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ListProductosComponent } from './pages/list-productos/list-productos.component';
import { ListPedidosComponent } from './pages/list-pedidos/list-pedidos.component';
import { ListVentasComponent } from './pages/list-ventas/list-ventas.component';
import { ListCalificacionesComponent } from './pages/list-calificaciones/list-calificaciones.component';
import { ListReclamosComponent } from './pages/list-reclamos/list-reclamos.component';
import { ListUsuariosComponent } from './pages/list-usuarios/list-usuarios.component';
import { PanelComponent } from './pages/panel/panel.component';


// Importaciones de Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    ListProductosComponent,
    ListPedidosComponent,
    ListVentasComponent,
    ListCalificacionesComponent,
    ListReclamosComponent,
    ListUsuariosComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

     // Módulos de Angular Material
     MatInputModule,
     MatFormFieldModule,
     MatButtonModule,
     MatIconModule,
     MatTableModule,
     MatPaginatorModule,
     MatSortModule
  ]
})
export class DashboardModule { }
