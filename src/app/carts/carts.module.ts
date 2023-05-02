import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';
import { AdminCartComponent } from './components/admin-cart/admin-cart.component';



@NgModule({
  declarations: [
    CartComponent,
    AdminCartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,


  ]
})
export class CartsModule { }
