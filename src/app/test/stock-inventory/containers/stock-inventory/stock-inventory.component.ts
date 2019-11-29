import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormsModule, FormBuilder } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss']
})
export class StockInventoryComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  form = new FormGroup({
    store: this.fb.group({
      branch: new FormControl(''),
      code: new FormControl('')
    }),
    selector: this.createStock({}),
    stock: this.fb.array([
      this.createStock({ product_id: 5, quantity: 30 }),
      this.createStock({ product_id: 4, quantity: 300 })
    ])
  })

  products: Product[] = [
    { id: 1, price: 250, name: "Mac pro" },
    { id: 2, price: 120, name: "IPOD" },
    { id: 3, price: 500, name: "USB" },
    { id: 4, price: 900, name: "Apple Mobile" }
  ]


  createStock(stock) {
    return (this.fb.group({
      product_id: (parseInt(stock.product_id,10) || ''),
      quantity: (stock.quantity || 10)
    }))
  }

  addStock(stock) {
    const controls = this.form.get('stock') as FormArray
    controls.push(this.createStock(stock))
    console.log(stock)
  }
  ngOnInit() {
  }
  onSubmit() {

    console.log(this.form.value)
  }

}
