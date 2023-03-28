import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { MainComponent } from './components/main/main.component';
import { ViewCarritoComponent } from './components/view-carrito/view-carrito.component';
import { InfoProductoComponent } from './components/info-producto/info-producto.component';
import { ProductComponent } from './components/product/product.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ComprarComponent } from './components/comprar/comprar.component';

@NgModule({
  declarations: [
    MainComponent,
    ViewCarritoComponent,
    InfoProductoComponent,
    ProductComponent,
    ComprarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ProductoRoutingModule,
  ]
})
export class ProductoModule { }
