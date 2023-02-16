import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { LoanFormComponent } from './loan-form/loan-form.component';

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
    component: LoanFormComponent,
//    loadChildren: () => import('./loan-form/loan-form.MODULE').then(m => m.LoanFormMODULE),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
