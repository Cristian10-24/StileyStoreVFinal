import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MujerComponent } from './pages/mujer/mujer.component';
import { HombreComponent } from './pages/hombre/hombre.component';
import { NinosComponent } from './pages/ninos/ninos.component';
import { CardComponent } from './components/card/card.component';
import { ProductsComponent } from './products.component';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { MeotodoCompraComponent } from './pages/meotodo-compra/meotodo-compra.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { PedidoComponent } from './pages/pedido/pedido.component';

@NgModule({
  declarations: [
    AllProductsComponent,
    CategoriesComponent,
    MujerComponent,
    HombreComponent,
    NinosComponent,
    CardComponent,
    ProductsComponent,
    MeotodoCompraComponent,
    CarritoComponent,
    PedidoComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRadioModule
    
  ]
})
export class ProductsModule { }
