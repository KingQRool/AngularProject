import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  @Input() createProduct: Array<Product> = [];
  @Output() sendProduct: EventEmitter<Product> = new EventEmitter();

  showForm: boolean = false;
  hideForm: boolean = false;
  resultado!: string;
  error: boolean = false;
  successMessage = true;
  productName = new FormControl<any>('', [Validators.maxLength(20), Validators.minLength(5), Validators.required]);

  constructor(
  ) { }

  onRegister() {
    console.log(this.productName.value)
  }

  openForm() {
    this.showForm = !this.showForm
  }

  showProducts() {
    console.log(this.createProduct);
  }

  hidenForm() {
    if (this.showForm) {
      this.showForm = false;
    } else {
      this.hideForm = true;
    }
  }

  submit() {
    if (this.productName.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }

  ngOnInit(): void {
    this.showProducts();
  }

  addProduct() {
    if (this.productName.valid) {
      const product = {
        id: 0,
        productName: this.productName.value
      }
      this.sendProduct.emit(product)
    }
  }
}
