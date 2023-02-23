import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CustomersModule } from './customers/customers.module';
import { FormsModule } from "@angular/forms";
import { ProductsModule } from './products/products.module';
import { LoansModule } from './loans/loans.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CustomersModule,
    FormsModule,
    ProductsModule,
    LoansModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
