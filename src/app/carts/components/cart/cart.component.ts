import { Component,OnInit } from '@angular/core';
import { CartService } from '../../services/carts.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


    // ** User **
  cartProducts: any[] = [];
  total: number = 0;
  ordered = false;

  constructor(private cartService: CartService,
  ) { }

  ngOnInit(): void {

    // ** User **
    this.getCartProducts();
     this.addCart()
    }


  getCartProducts() {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
       console.log(this.cartProducts);
    }
     this.getCartTotal();
  }

  getCartTotal() {
    this.total = 0;
    for (let x in this.cartProducts) {
      this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity;

    }
  }

  minsAmount(index:number) {
    this.cartProducts[index].quantity--;
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    this.getCartTotal();
  }

  plusAmount(index:number) {
    this.cartProducts[index].quantity++
          localStorage.setItem("cart", JSON.stringify(this.cartProducts));
        this.getCartTotal();
  }

  detectChange() {
    this.getCartTotal();
   localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  clearCart() {
    this.cartProducts = [];
       localStorage.setItem("cart", JSON.stringify(this.cartProducts));
 this.getCartTotal();
  }

  addCart() {
    this.ordered = true;
    let products = this.cartProducts.map(item => {
      return { productID: item.item.id, quantity: item.quantity };
    });

    let Model = {
      userId: 5,
      date: new Date(),
      products: [products]
    }

      this.cartService.createNewCart(Model)
        .subscribe((res:any) => {
          this.ordered = false;
        });
    //this.clearCart();
    // console.log(Model);
    }


   deleteitem(index:number) {
    this.cartProducts.splice(index, 1);
       localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    this.getCartTotal();
}

  }



