import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Customers } from 'src/app/models/customer.model';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})

export class CreateCustomerComponent {

  @Input() createCustomer: Array<Customers> = [];
  @Output() sendCustomer: EventEmitter<Customers> = new EventEmitter();

  customerName = new FormControl<any>('', [Validators.required, Validators.maxLength(20)],);
  customerTelephone = new FormControl<any>('', Validators.required);
  customerEmail = new FormControl<any>('', [Validators.required, Validators.email]);


  constructor() {

  }

  get isNameFieldValid() { return this.customerName.touched && this.customerName.valid; }

  get isNameFieldInvalid() { return this.customerName.touched && this.customerName.invalid; }

  onRegister() {
    console.log(this.customerName.value),
      console.log(this.customerTelephone.value),
      console.log(this.customerEmail.value)
  }

  showCustomers() {
    console.log(this.createCustomer)
  }

  submit() {

  }

  ngOnInit(): void {
    this.showCustomers();
  }

  showCustomerFormValues() {
    console.log(this.customerName?.value);
    console.log(this.customerTelephone?.value)
    console.log(this.customerEmail?.value)

  }

  sendFormToShow() {
    this.showCustomerFormValues();
  }

  addCustomer() {
    if (this.customerName.valid) {
      const customer = {
        customerId: '0',
        customerName: this.customerName.value,
        customerTelephone: this.customerTelephone.value,
        customerEmail: this.customerEmail.value
      }
      this.sendCustomer.emit(customer)
    }
  }

  // ------------------------------VALIDACIONES ANTERIORES------------------------------------\\
  // buildCustomerForm(){
  //   this.customerForm = this.customerFormBuilder.group({
  //       customerName:['',[Validators.required, Validators.maxLength(20)]],
  //       customerTelephone:[''],
  //       customerEmail:['',[Validators.required, Validators.email]]
  //   })
  // }
  //------------------------------------------------------------------------------------------\\

  // ------------------------------MOSTRAR EN CONSOLA-----------------------------------------\\
  // get customerName(){ return this.customerForm.get('customerName')}
  // get customerTelephone(){ return this.customerForm.get('customerTelephone')}
  // get customerEmail(){ return this.customerForm.get('customerEmail')}
  // get customerDocumentType(){return this.customerForm.get('customerDocumentType')}
  // get customerDocumentNumber(){ return this.customerForm.get('customerDocumentNumber')}
  // get customerPassword(){ return this.customerForm.get('customerPassword')}
  // ------------------------------------------------------------------------------------------\\

  //---------------CONSTRUCTOR ANTERIOR-----------------\\
  // constructor(
  //   private customerFormBuilder:FormBuilder
  // ){
  //     this.buildCustomerForm();
  // }
  //----------------------------------------------------\\

}
