import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ListPedidosComponent } from './pages/list-pedidos/list-pedidos.component';
import { ListVentasComponent } from './pages/list-ventas/list-ventas.component';
import { ListCalificacionesComponent } from './pages/list-calificaciones/list-calificaciones.component';
import { ListReclamosComponent } from './pages/list-reclamos/list-reclamos.component';
import { ListUsuariosComponent } from './pages/list-usuarios/list-usuarios.component';
import { PanelComponent } from './pages/panel/panel.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { SharedModule } from '../shared/shared.module';
import { CreateProductoComponent } from './pages/list-productos/create-producto/create-producto.component';




@NgModule({
  declarations: [
    ListPedidosComponent,
    ListVentasComponent,
    ListCalificacionesComponent,
    ListReclamosComponent,
    ListUsuariosComponent,
    PanelComponent,
    TablaComponent,
    CreateProductoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule

  ]
})
export class DashboardModule { }
