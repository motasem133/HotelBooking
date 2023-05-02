import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAllProductsComponent } from './components/admin-all-products/admin-all-products.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    ProductComponent,
    AdminAllProductsComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
     RouterModule,
    HttpClientModule,

  ],

})
export class ProductsModule { }
