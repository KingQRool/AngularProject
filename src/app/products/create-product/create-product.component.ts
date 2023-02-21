import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
@Input() createProduct : Array<Product>=[];
@Output() sendProduct : EventEmitter<Product> = new EventEmitter();

  error : boolean = false;

  productName = new FormControl<any>('', Validators.required);

  constructor(
  ){}

  onRegister() {
    console.log(this.productName.value)
  }

  public showForm : boolean = false;
  openForm(){
    this.showForm = !this.showForm
  }


  showProducts(){
    console.log(this.createProduct);
  }

  ngOnInit(): void {
    this.showProducts();
  }


  addProduct(){
    if (this.productName.valid) {
      const product = {
        id : 0,
        productName : this.productName.value
      }
      this.sendProduct.emit(product)
    }
  }
}
