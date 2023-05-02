import { Component,OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  constructor(private authService: AuthService,
    private build: FormBuilder,
    private router: Router,) { }

  ngOnInit(): void {
    this.form = this.build.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      name: this.build.group({
        firstname: ['', [Validators.required]],
        lastname: ['', [Validators.required]]
      }),
      address: ['', [Validators.required]],
    })

  }
  get f() {
    return this.form.controls;
  }
  onSubmit() {
    const body = {
      email: this.f['email'].value,
      username: this.f['username'].value,
      password: this.f['password'].value,
      phone: this.f['phone'].value,
      name: {
        firstname: this.f['firstname'],
        lastname: this.f['lastname'],
      },
      address: this.f['address'].value,
    }

    this.authService.adduser(body)
      .subscribe((res: any) => {

        localStorage.setItem('userToken', JSON.stringify(body));
  this.router.navigate(['/auth/login']);
        console.log(res)


      }, (error: any) => {
        console.log(error.error);
      })

  }
}













