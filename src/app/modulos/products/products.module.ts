import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MujerComponent } from './pages/mujer/mujer.component';
import { HombreComponent } from './pages/hombre/hombre.component';
import { NinosComponent } from './pages/ninos/ninos.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    AllProductsComponent,
    CategoriesComponent,
    MujerComponent,
    HombreComponent,
    NinosComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
