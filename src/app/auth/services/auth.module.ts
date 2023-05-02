import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AuthComponent } from '../components/auth/auth.component';


@NgModule({
  declarations: [
    AuthComponent,


  ],

    imports: [
    CommonModule,
    FormsModule,
    SharedModule,


  ]
})
export class AuthModule { }
