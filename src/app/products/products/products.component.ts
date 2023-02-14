import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  register = {
    productName : '',
    productValue : ''
  }
  onRegister(){
    console.log(this.register)
  }
}
