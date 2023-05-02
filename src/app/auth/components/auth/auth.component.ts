import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoading = false;
  isAuthenticated = false;
  form!: FormGroup;
  currentUser : any
  // 1 first step inject the form builder
  constructor(
    private build: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // 2 declare the form
    this.form = this.build.group({
      username: [''],
      password: [''],
    });
  }
  // 3 create this function to reach the form value
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    // see the output in console
    const body = {
      username: this.f['username'].value,
      password: this.f['password'].value,
    };
    this.authService.login(body).subscribe(
      (res: any) => {
        localStorage.setItem('UserData', JSON.stringify(res));
        this.router.navigate(['/products']);
      },
      (error) => {
        console.log(error.error);
      }
    );
  }
}


