import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  id !: any;
  data: any = {}
  Loading: boolean = false;

  ngOnInit(): void {
    this.getproduct();
  }
  constructor(private rout: ActivatedRoute,
  private productService : ProductsService) {
    this.id = rout.snapshot.paramMap.get("id");
    // console.log(this.id)
  }
  getproduct() {
    this.Loading = true;
    this.productService.getProductbyID(this.id)
      .subscribe(res => {
        this.data = res;
        this.Loading = false;
        console.log(res);
      }, error => {
        this.Loading = false;
        alert(error);
      }


      );

}


}
