import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { NinosComponent } from './pages/ninos/ninos.component';
import { MujerComponent } from './pages/mujer/mujer.component';
import { HombreComponent } from './pages/hombre/hombre.component';
import { CategoriesComponent } from './pages/categories/categories.component';

const routes: Routes = [
  { path: '', component: AllProductsComponent,
  children: [
    { path: 'mujer', component: MujerComponent },
    { path: 'hombre', component: HombreComponent },
    { path: 'niños', component: NinosComponent },
    { path: 'categorias', component: CategoriesComponent }

  ] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
