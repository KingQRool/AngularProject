import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

<<<<<<< HEAD:src/app/products/products/products.component.ts
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

=======
>>>>>>> feature/SMonroy-products:src/app/products/products.component.ts
}
