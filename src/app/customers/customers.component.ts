import { Component } from '@angular/core';
import { Customers } from '../models/customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {

  customer: Customers[] = [
    {
      customerId: '1',
      customerName: 'Miguel Angel',
      customerTelephone: '234567',
      customerEmail: 'example@gmail.com',

    },
    {
      customerId: '2',
      customerName: 'Rafael Sanzio',
      customerTelephone: '345678',
      customerEmail: 'R.Sanzio@gmail.com',

    },
    {
      customerId: '3',
      customerName: 'Sandro Botticeli',
      customerTelephone: '345678',
      customerEmail: 'San.Bottie@gmail.com',

    },
    {
      customerId: '4',
      customerName: 'Antonio Allegri',
      customerTelephone: '456789',
      customerEmail: 'Anton10@gmail.com',

    },
    {
      customerId: '5',
      customerName: 'Fra Angelico',
      customerTelephone: '567890',
      customerEmail: 'Angel.Fra@gmail.com',

    }
  ];

  createCustomer: Customers[] = [

  ]

  loadCustomer(customer: Customers) {
    console.log(customer)
    this.customer.push(customer)
  }



}
