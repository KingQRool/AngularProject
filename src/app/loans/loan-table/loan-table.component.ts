import { Component, Input } from "@angular/core";
import { Loan } from '../../models/loan.model';

@Component({
  selector: 'app-loan-table',
  templateUrl: './loan-table.component.html',
  styleUrls: ['./loan-table.component.scss']
})
export class LoanTableComponent {

  @Input() loans: Loan[] = [];


}
