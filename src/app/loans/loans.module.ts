import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoanTableComponent } from './loan-table/loan-table.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { LoansComponent } from './loans.component';

@NgModule({
  declarations: [
    LoanFormComponent,
    LoanTableComponent,
    LoansComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    LoansComponent
  ]
})
export class LoansModule { }
