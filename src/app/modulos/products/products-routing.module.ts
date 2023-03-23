import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NinosComponent } from './pages/ninos/ninos.component';
import { MujerComponent } from './pages/mujer/mujer.component';
import { HombreComponent } from './pages/hombre/hombre.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MeotodoCompraComponent } from './pages/meotodo-compra/meotodo-compra.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { ProductsComponent } from './products.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent,
  children: [
    { path: 'mujer', component: MujerComponent },
    { path: 'hombre', component: HombreComponent },
    { path: 'niños', component: NinosComponent },
    { path: 'allProducts', component: AllProductsComponent },
    { path: 'categorias', component: CategoriesComponent }
  
  ] },
  {path:'comprar',component: MeotodoCompraComponent},
  {path:'carrito',component: CarritoComponent},
  {path:'pedido', component: PedidoComponent}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
