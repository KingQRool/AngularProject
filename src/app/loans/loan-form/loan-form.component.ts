import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Loan } from 'src/app/models/loan.model';
import { Customers } from 'src/app/models/customer.model';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss']
})

export class LoanFormComponent {

  @Input() loanForm: Array<Loan> = [];
  @Output() sendLoan: EventEmitter<Loan> = new EventEmitter();

  showForm: boolean = false;
  hideForm: boolean = false;
  sendButton: boolean = false;

  customerName = new FormControl<any>('', [Validators.required, Validators.maxLength(20)],);
  customerTelephone = new FormControl<any>('', Validators.required);
  customerEmail = new FormControl<any>('', [Validators.required, Validators.email]);
  productType = new FormControl<any>('',Validators.required);
  productName = new FormControl<any>('',Validators.required);
  totalAmount = new FormControl<any>('',Validators.required);
  paymentDay = new FormControl<any>('',Validators.required);

  constructor(){
  }

  get isNameFieldValid() { return this.customerName.touched && this.customerName.valid; }

  get isNameFieldInvalid() { return this.customerName.touched && this.customerName.invalid; }

  onRegister() {
    (this.customerName.value),
      (this.customerTelephone.value),
      (this.customerEmail.value)
  }

  showLoans() {
    (this.loanForm)
  }

  submit() {

  }

  ngOnInit(): void {
    this.showLoans();
  }

  showLoansValues() {
    console.log(this.productType?.value);
    console.log(this.productName?.value);
    console.log(this.totalAmount?.value);
    console.log(this.paymentDay?.value);
  }

  sendLoanToShow() {
    this.showLoansValues();
  }

  openForm() {

    if (this.showForm) {
      this.hideForm = false;
    } else {
      this.showForm = true;
    }

  }

  hidenForm() {
    if (this.showForm) {
      this.showForm = false;
    } else {
      this.hideForm = true;
    }
  }

  sendForm() {
    this.showLoansValues();
  }

  addLoan() {
    if (this.paymentDay.valid) {
      const loan = {
        loanId: '0',
        productType: this.productType.value,
        productName: this.productName.value,
        totalAmount: this.totalAmount.value,
        paymentDay: this.paymentDay.value,
        customer: this.customerName.value
      }
      this.sendLoan.emit(loan)
    }
  }

}
