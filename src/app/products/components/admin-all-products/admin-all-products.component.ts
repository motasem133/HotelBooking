import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-admin-all-products',
  templateUrl: './admin-all-products.component.html',
  styleUrls: ['./admin-all-products.component.css']
})
export class AdminAllProductsComponent implements OnInit {


      // ** ADMIN **
        products: Product[] = [];
        categories: string[] = [];
        loading = false;
        base64: any = '';
        form!: FormGroup;
  details: any;

   constructor(private productService: ProductsService,
  private build: FormBuilder) { }

  ngOnInit(): void {

// ** ADMIN **
    this.form = this.build.group({
      title: ['',[ Validators.required]],
      price: ['',[ Validators.required, Validators.pattern ("^[0-9]*$")]],
      description: ['',[ Validators.required]],
      image: ['',[ Validators.required]],
      category: ['',[ Validators.required]]
    });
    this.getProducts();
    this.getCategories();
  }





  // ** ADMIN **
  getProducts() {
    this.loading = true;
    this.productService.getAllProducts()
      .subscribe((res: any) => {
        this.products = res;
        this.loading=false
      }, error => {
        this.loading = false;
        alert(error);
            })
  }

  add() {


  }
  getCategories() {
    this.productService.getAllCategories()
      .subscribe((res: any) => {
        this.categories = res;
      }, error => {
        alert(error);
    })
  }

  getSelectedCategory(event :any){
          this.form.get('category')?.setValue(event.target.value);

  }


  addProduct() {
    const model = this.form.value;
    this.productService.createProduct(model)
      .subscribe((res:any)=> {
      alert("product have been sucessfully added!")
      })

  }

      getImagePath(event :any){
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.base64 = reader.result;
       this.form.get('image')?.setValue("sam");
          console.log(this.form);
        };

      }

  update(index: any) {

    this.form.patchValue({
      title: index.title,
      price: index.price,
      description: index.description,
      image: index.image,
      category: index.category

    })
    this.base64 = index.image;
  }

}
