import { Component, Input } from "@angular/core";
import { Customers } from "../../models/customer.model"

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.scss']
})

export class CustomersTableComponent {

  @Input() customers: Customers[] = [];

  showCustomers() {
    console.log(this.customers);
  }

  ngOnInit(): void {
    this.showCustomers();
  }

}
    // loadCustomer(customer : Customers){
    //   console.log(customer)
    //   this.customer.push(customer)
    // }


