import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  error : boolean = false;

  formProduct !: FormGroup;
  constructor(
    private formBuilder : FormBuilder
  ){}

  buildForm (){
    this.formProduct = this.formBuilder.group({
      productName : ['', Validators.required],
      productValue : [0, Validators.required]
    })
  }
  get productName(){ return this.formProduct.get('productName')}
  get productValue(){ return this.formProduct.get('productValue')}


  onRegister() {
    console.log(this.formProduct.value)
  }

  public showForm : boolean = false;
  openForm(){
    this.showForm = !this.showForm
  }



}
