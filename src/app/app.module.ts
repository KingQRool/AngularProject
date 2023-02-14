import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products/products.component';
import { TableProductsComponent } from './table-products/table-products/table-products.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    TableProductsComponent
    ],
  imports: [
    BrowserModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
