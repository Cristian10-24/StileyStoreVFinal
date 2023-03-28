import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprarComponent } from './components/comprar/comprar.component';
import { InfoProductoComponent } from './components/info-producto/info-producto.component';
import { MainComponent } from './components/main/main.component';
import { ViewCarritoComponent } from './components/view-carrito/view-carrito.component';

const routes: Routes = [
  { path: '', component:MainComponent},
  { path: 'view-carrito', component: ViewCarritoComponent },
  { path: 'info-productos/:id', component: InfoProductoComponent},
  { path: 'comprar', component: ComprarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
