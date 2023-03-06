import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOninit(): void {

  }

  save(event: Event) {
    if (this.loanForm.valid){
      (this.loanForm?.value);
    } else {
      this.loanForm.markAllAsTouched();
    }
  }

  buildForm() {
    this.loanForm = this.formBuilder.group({
      personData: this.formBuilder.group({
        customerName: ['',[Validators.required, Validators.maxLength(10), Validators.pattern(/^[a-zA-Z ]+$/)]],
        telephone: ['',[Validators.required]],
        email: ['',[Validators.required, Validators.email]],
      }),
      productType: ['',[Validators.required]],
      productName: ['',[Validators.required]],
      totalAmount: ['',[Validators.required, Validators.pattern(/^[0-9 ]+$/)]],
      paymentDay: ['',[Validators.required]]
    })
  }





  get personData() { return this.loanForm.get('personData') }

  get personName() { return this.loanForm.get('personData.customerName') }
  get personTelephone() { return this.loanForm.get('personData.telephone') }
  get personEmail() { return this.loanForm.get('personData.email') }

  get productType() { return this.loanForm.get('productType') }
  get productName() { return this.loanForm.get('productName') }
  get totalAmount() { return this.loanForm.get('totalAmount') }
  get paymentDay() { return this.loanForm.get('paymentDay') }

  showCustomerName() {

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
    this.showCustomerName();
  }


}
