import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', 
  loadChildren:  () => import('./modulos/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  { path: 'login', 
  loadChildren:  () => import('./modulos/login/login.module').then(m => m.LoginModule)
  },
  { path: 'productos', 
  loadChildren:  () => import('./modulos/products/products.module').then(m => m.ProductsModule)
  },
  { path: 'about', 
  loadChildren:  () => import('./modulos/about/about.module').then(m => m.AboutModule)
  },
  { path: 'dashboard', 
  loadChildren:  () => import('./modulos/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  
  {
    path: '**', redirectTo: '/', pathMatch: 'full'
  },

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
