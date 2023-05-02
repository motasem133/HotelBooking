import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    AlertComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    FormsModule,
    ReactiveFormsModule,


  ]
})
export class SharedModule { }
