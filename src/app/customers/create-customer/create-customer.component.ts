import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Customers } from 'src/app/models/customer.model';

// @Input() createCustomer : Array<Customers>=[];
// @Output() sendCustomer : EventEmitter<Customers> = new EventEmitter();

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})

export class CreateCustomerComponent {

  //     getnameValue(){
  //         console.log(this.nameField.value);
  //     }

  // nameField = new FormControl();

  customerForm!: FormGroup;
  customerNameS = new FormGroup<any>('', Validators.required);
  customerTelephoneS = new FormGroup<any>('', Validators.required);
  customerEmailS = new FormGroup<any>('', Validators.required);


    constructor(
      private customerFormBuilder:FormBuilder
    ){
        this.buildCustomerForm();
    }

    buildCustomerForm(){
      this.customerForm = this.customerFormBuilder.group({
          customerName:['',[Validators.required, Validators.maxLength(20)]],
          customerTelephone:[''],
          customerEmail:['',[Validators.required, Validators.email]],
          customerDocumentType:['',[Validators.required, Validators.minLength(2)]],
          customerDocumentNumber:['',[Validators.required]],
          customerPassword:['',Validators.required]
      })
    }

    get customerName(){ return this.customerForm.get('customerName')}
    get customerTelephone(){ return this.customerForm.get('customerTelephone')}
    get customerEmail(){ return this.customerForm.get('customerEmail')}
    get customerDocumentType(){return this.customerForm.get('customerDocumentType')}
    get customerDocumentNumber(){ return this.customerForm.get('customerDocumentNumber')}
    get customerPassword(){ return this.customerForm.get('customerPassword')}

    showCustomerFormValues(){
      console.log(this.customerName?.value);
      console.log(this.customerTelephone?.value)
      console.log(this.customerEmail?.value)
      console.log(this.customerDocumentType?.value)
      console.log(this.customerDocumentNumber?.value)
      console.log(this.customerPassword?.value)
    }

    sendFormToShow(){
      this.showCustomerFormValues();
    }

    // addCustomer(){
    //   if (this.customerNameS.valid && this.customerTelephoneS.valid && this.customerEmailS.valid) {
    //     const customer = {
    //       id : 0,
    //       this.customerName : this.customerName.value,
    //       this.customerTelephone : this.customerTelephone.value,
    //       this.customerEmail : this.customerEmail.value
    //     }
    //     this.sendCustomer.emit(customer)
    //   }

    // }

}
