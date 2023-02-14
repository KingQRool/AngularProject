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

  showForm: boolean = false;
  hiddenForm: boolean = true;
  openForm(){
    if (this.showForm){
      this.hiddenForm = false;
    } else{
      this.showForm = true;
    }
  }

  closeForm(){
    if (this.showForm){
      this.showForm = false;
    }else{
      this.hiddenForm = true;
    }
  }

}
