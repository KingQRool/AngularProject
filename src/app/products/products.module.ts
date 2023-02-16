import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CreateProductComponent } from './create-product/create-product.component';
import { TableProductsComponent } from './table-products/table-products.component';
import { ProductsComponent } from './products.component';


@NgModule({
  declarations: [
    CreateProductComponent,
    TableProductsComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
