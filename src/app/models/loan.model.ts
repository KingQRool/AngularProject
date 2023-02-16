import { Customer } from "./customer.model";

export interface Loan{
    loanId: String;
    productType: String;
    productName: String;
    totalAmount: Number;
    paymentDay: String;
    customer: Customer;

}

