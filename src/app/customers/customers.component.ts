import { Component } from "@angular/core";
import { Customers } from "../models/customers.model"

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})

export class CustomersComponent {
    customer: Customers[] = [
      {
      customerId: '1',
      customerName:'Miguel Angel',
      customerTelephone: '234567',
      customerEmail:'example@gmail.com',
      customerDocumentType: 'CC',
      customerDocumentNumber: '098765543'
    },
    {
      customerId:'2',
      customerName:'Rafael Sanzio',
      customerTelephone: '345678',
      customerEmail:'R.Sanzio@gmail.com',
      customerDocumentType: 'CC',
      customerDocumentNumber: '897654321'
    },
    {
      customerId:'3',
      customerName:'Sandro Botticeli',
      customerTelephone: '345678',
      customerEmail:'San.Bottie@gmail.com',
      customerDocumentType: 'CC',
      customerDocumentNumber: '765432109'
    },
    {
      customerId:'4',
      customerName:'Antonio Allegri',
      customerTelephone: '456789',
      customerEmail:'Anton10@gmail.com',
      customerDocumentType: 'CC',
      customerDocumentNumber: '654321098'
    },
    {
      customerId:'5',
      customerName:'Fra Angelico',
      customerTelephone: '567890',
      customerEmail:'Angel.Fra@gmail.com',
      customerDocumentType: 'CC',
      customerDocumentNumber: '543210987'
    }
    ];
}
