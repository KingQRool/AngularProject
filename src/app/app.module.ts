import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanTableComponent } from './loan-table/loan-table.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CustomersModule } from './customers/customers.module';
import { FormsModule } from "@angular/forms";


import { ProductsComponent } from './products/products/products.component';
import { TableProductsComponent } from './table-products/table-products/table-products.component';


@NgModule({
  declarations: [
    AppComponent,
    LoanTableComponent,
    LoanFormComponent,
    HeaderComponent,
    ProductsComponent,
    TableProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CustomersModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
