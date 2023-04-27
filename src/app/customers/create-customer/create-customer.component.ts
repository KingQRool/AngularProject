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
    (this.customerName.value),
      (this.customerTelephone.value),
      (this.customerEmail.value)
  }

  showCustomers() {
    (this.createCustomer)
  }

  submit() {

  }

  ngOnInit(): void {
    this.showCustomers();
  }

  showCustomerFormValues() {


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

}
