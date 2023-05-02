import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  // ** USER **
  products: Product[] = [];
  categories: string[] = [];
  loading = false;
  cartProducts: any[] = [];
  currentUser: any;

  constructor(private productService: ProductsService,
    private build: FormBuilder) { }
  ngOnInit(): void {
    this.currentUser =
      JSON.parse(localStorage.getItem("userData") || "{}")
    console.log(localStorage.getItem("UserData"))
    this.getProducts();
    this.getCategories();
  }



  getProducts() {
    this.loading = true;
    this.productService.getAllProducts()
      .subscribe((res: any) => {
        this.products = res;

        this.loading = false;
        // console.log(res);
      }, error => {
        this.loading = false;
        console.log(error.massege);
      });
  }
  getCategories() {
    this.loading = true;
    this.productService.getAllCategories()
      .subscribe((res: any) => {
        this.categories = res;

        this.loading = false;
        // console.log(res);

      }, error => {
        this.loading = false;
        console.log(error.massege);
      }
      )

  }
  filterCategory(event: any) {
    this.loading = true;
    let value = event.target.value;
    this.loading = false;

    if (value === "all") {
      this.getProducts();
    } else
      this.getproductcategory(value);

    // console.log(value);
  }
  getproductcategory(keyword: string) {
    this.loading = true;
    this.productService.getProductsbyCategory(keyword)
      .subscribe((res: any) => {
        this.products = res;
        this.loading = false;
      });

  }
  addtoCrt(event: any) {
    // JSON.stringify();    **for sending data**
    // JSON.parse();          **for recive data**

    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
      let exist = this.cartProducts.find(item => item.item.id == event.item.id);
      if (exist) {
        alert("you already have the product in the cart!")
      } else {
        this.cartProducts.push(event);
        localStorage.setItem("cart", JSON.stringify(this.cartProducts)); // ** to see the data in web console **
      }
    }
    else {
      this.cartProducts.push(event);
      localStorage.setItem("cart", JSON.stringify(this.cartProducts));

    }

  }
}
