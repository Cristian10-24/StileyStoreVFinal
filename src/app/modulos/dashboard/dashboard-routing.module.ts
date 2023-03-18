import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './pages/panel/panel.component';
import { ListUsuariosComponent } from './pages/list-usuarios/list-usuarios.component';
import { ListProductosComponent } from './pages/list-productos/list-productos.component';
import { ListPedidosComponent } from './pages/list-pedidos/list-pedidos.component';
import { ListVentasComponent } from './pages/list-ventas/list-ventas.component';
import { ListCalificacionesComponent } from './pages/list-calificaciones/list-calificaciones.component';
import { ListReclamosComponent } from './pages/list-reclamos/list-reclamos.component';

const routes: Routes = [
  { path: '', component: PanelComponent },
  { path: 'usuarios', component: ListUsuariosComponent },
  { path: 'productos', component: ListProductosComponent },
  { path: 'pedidos', component: ListPedidosComponent },
  { path: 'ventas', component: ListVentasComponent },
  { path: 'calificaciones', component: ListCalificacionesComponent },
  { path: 'reclamos', component: ListReclamosComponent },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
