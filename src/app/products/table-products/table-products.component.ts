import { Component } from '@angular/core';
@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})
export class TableProductsComponent {
  showForm: boolean = false;
  hiddenForm: boolean = true;
  openForm() {
    if (this.showForm) {
      this.hiddenForm = false;
    } else {
      this.showForm = true;
    }
  }

  product = [
    {
      productType: 'Crédito inteligente',
      productName: '',
      productValue: ''
    }
    , {
      productType: 'Crédito nómina',
      productName: '',
      productValue: ''
    }
    , {
      productType: 'Línea mujer',
      productName: '',
      productValue: ''
    }
    , {
      productType: 'Convenio SUAM',
      productName: '',
      productValue: ''
    }
    , {
      productType: 'PA Bancolombia',
      productName: '',
      productValue: ''
    }
  ]
}
