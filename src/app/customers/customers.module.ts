import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomersTableComponent } from './customer-table/customers-table.component';
import { CustomersComponent } from './customers.component';


@NgModule({
  declarations: [
    CreateCustomerComponent,
    CustomersTableComponent,
    CustomersComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CustomersComponent
  ]
})
export class CustomersModule { }
