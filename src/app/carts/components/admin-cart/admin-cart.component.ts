import { Component,OnInit } from '@angular/core';
import { CartService } from '../../services/carts.service';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-admin-cart',
  templateUrl: './admin-cart.component.html',
  styleUrls: ['./admin-cart.component.css']
})
export class AdminCartComponent implements OnInit {
  carts: any[] = [];
  products: any[] = [];
  total = 0
  form!: FormGroup;
  loading = false;
  details: any;


  constructor(private cartService: CartService,
    private build: FormBuilder,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getCarts();
    this.form = this.build.group({
      start: [''],
      end: ['']
    })
  }


  getCarts() {
    this.loading = true;
    this.cartService.getAllCarts()
      .subscribe((res: any) => {
        this.carts = res;
        this.loading = false;
      })
  }

  applyfilter() {
    let date = this.form.value;
    this.cartService.getAllCarts(date)
      .subscribe((res: any) => {
        this.carts = res;
        console.log(res);
      })
    console.log(this.form.value);

  }
  deleteCart(index: number) {
    this.cartService.deleteCart(index)
      .subscribe(res => {
        alert("product deleted successfully!");
        this.getCarts();
      })
  }
  // getCartTotal() {
  //   this.total = 0;
  //   for (let x in this.details) {
  //     this.total += this.details[x].item.price * this.details[x].quantity;
  //   }
  // }

  view(index: number) {
    this.products = [];
    this.details = this.carts[index];
    for (let x in this.details.products) {
      this.productsService
        .getProductbyID(this.details.products[x].productId).subscribe(res => {
          this.products.push({ item: res, quantity: this.details.products[x].quantity });
        });
    }
    console.log(this.details);
  }
}
