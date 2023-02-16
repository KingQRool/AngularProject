import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss']
})

export class LoanFormComponent {

  showForm: boolean = false;
  hideForm: boolean = false;
  sendButton: boolean = false;
  loanForm!: FormGroup;

  constructor(
    private formBuilder:FormBuilder
  ){
      this.buildForm();
  }

  buildForm(){
    this.loanForm = this.formBuilder.group({
      customerName:[''],
      telephone:[''],
      email:[''],
      productType:[''],
      productName:[''],
      totalAmount:[''],
      paymentDay:['']
    })
  }

//get customerName(){ return this.customerForm.get('customerName')}

  get customerName(){ return this.loanForm.get('customerName')}
  get telephone(){ return this.loanForm.get('telephone')}
  get email(){ return this.loanForm.get('email')}
  get productType(){ return this.loanForm.get('productType')}
  get productName(){ return this.loanForm.get('productName')}
  get totalAmount(){ return this.loanForm.get('totalAmount')}
  get paymentDay(){ return this.loanForm.get('paymentDay')}

//get customerName(){ return this.loanForm.get('telephone')}

  showCustomerName(){
    console.log(this.customerName?.value);
    console.log(this.telephone?.value);
    console.log(this.email?.value);
    console.log(this.productType?.value);
    console.log(this.productName?.value);
    console.log(this.totalAmount?.value);
    console.log(this.paymentDay?.value);
//    console.log(this.loanform?.value)
  }

  openForm(){

    if (this.showForm) {
  this.hideForm = false;
  } else {
  this.showForm = true;
  }

  }

  hidenForm(){
    if (this.showForm) {
  this.showForm = false;
  } else {
  this.hideForm = true;
  }
  }

  sendForm(){
    this.showCustomerName();
  }

}
