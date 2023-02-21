import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: Product[] = [
    {
      id: 1,
      productName: 'Crédito inteligente'
    },
    {
      id: 2,
      productName: 'Crédito nómina'
    },
    {
      id: 3,
      productName: 'Línea Mujer'
    },
    {
      id: 4,
      productName: 'Convenio SUAM'
    },
    {
      id: 5,
      productName: 'PA Bancolombia'
    }
  ]

  createProduct: Product[] = [
  ]

  loadProduct(product : Product){
    console.log(product)
    this.products.push(product)
  }

}
