import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { AdminCartComponent } from './carts/components/admin-cart/admin-cart.component';
import { AdminAllProductsComponent } from './products/components/admin-all-products/admin-all-products.component';
import { AuthComponent } from './auth/components/auth/auth.component';
import { RegisterComponent } from './auth/components/register/register.component';

const routes: Routes = [
  { path: "", component: AuthComponent },
  { path: "products", component: AllProductsComponent },
  { path: "details/:id", component: ProductsDetailsComponent },
  { path: "cart", component: CartComponent },
  { path: "admincart", component: AdminCartComponent },
  { path: "adminproducts", component: AdminAllProductsComponent },
  { path: "auth/login", component: AuthComponent },
  {path: "register" , component:RegisterComponent},
  {path: "**" , redirectTo:"products", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
