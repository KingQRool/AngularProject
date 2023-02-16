import { Component } from '@angular/core';
import { Loan } from '../models/loan.model';

@Component({
  selector: 'app-loan-table',
  templateUrl: './loan-table.component.html',
  styleUrls: ['./loan-table.component.scss']
})
export class LoanTableComponent {
    loans: Loan[] = [
      {
        loanId: '1',
        productType: 'Finaktiva',
        productName: 'Credito Inteligente',
        totalAmount: 1000000,
        customer: {
          customerId: '1',
          customerName: 'Sutanito I',
          telephone: '23456765'
        },
        paymentDay: '12/2/21'
      },
      {
        loanId: '2',
        productType: 'Finaktiva',
        productName: 'Credito Nomina',
        totalAmount: -1000000,
        customer: {
          customerId: '2',
          customerName: 'Peranito X',
          telephone: '2345678'
        },
        paymentDay: '04/19/22'
      },
      {
        loanId: '3',
        productType: 'Factoring',
        productName: 'Linea Mujer',
        totalAmount: 25000000,
        customer: {
          customerId: '3',
          customerName: 'Juanito IV',
          telephone: '4567876'
        },
        paymentDay: '12/2/21'
      },
      {
        loanId: '4',
        productType: 'Confirming',
        productName: 'Convenio SUAM',
        totalAmount: 1900000.5,
        customer: {
          customerId: '4',
          customerName: 'Fabian I',
          telephone: '34567892'
        },
        paymentDay: '0/0/0'
      },
      {
        loanId: '5',
        productType: 'Finaktiva',
        productName: 'PA Bancolombia',
        totalAmount: -0,
        customer: {
          customerId: '5',
          customerName: 'julianita XX',
          telephone: '23456765'
        },
        paymentDay: '12/2/21'
      }
    ];


}

