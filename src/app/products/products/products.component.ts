import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  register = {
    productName: '',
    productValue: ''
  }
  onRegister() {
    console.log(this.register)
  }

  public showForm: boolean = false;
  openForm() {
    this.showForm = !this.showForm
  }

}
