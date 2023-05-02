import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() data!: Product;
  @Output() item = new EventEmitter();
  addbutton = false;
  amount: number = 1;

  add() {

    this.item.emit({ item: this.data, quantity: this.amount } );
}


}
