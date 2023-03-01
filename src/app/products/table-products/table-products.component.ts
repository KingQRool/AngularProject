import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.scss']
})
export class TableProductsComponent {
  @Input() products: Product[] = [];
  showForm: boolean = false;
  hiddenForm: boolean = true;

  openForm() {
    if (this.showForm) {
      this.hiddenForm = false;
    } else {
      this.showForm = true;
    }
  }

  showProducts() {
    console.log(this.products);
  }

  ngOnInit(): void {
    this.showProducts();
  }
}
