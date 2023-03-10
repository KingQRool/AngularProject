import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { LoansComponent } from './loans/loans.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Inicio',
    pathMatch: 'full',

  },
  {
    path: 'Clientes',
    component: CustomersComponent,
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),
  },
  {
    path: 'Prestamos',
    component: LoansComponent,
        loadChildren: () => import('./loans/loans.module').then(m => m.LoansModule),
  },
  {
    path: 'Productos',
    component: ProductsComponent,
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
