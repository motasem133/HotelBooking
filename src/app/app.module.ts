import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';
import { AuthModule } from './auth/services/auth.module';
import { RegisterComponent } from './auth/components/register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
      BrowserModule,
      CommonModule,
       AppRoutingModule,
      SharedModule,
      ProductsModule,
      CartsModule,
      AuthModule,

    ]
})
export class AppModule { }
