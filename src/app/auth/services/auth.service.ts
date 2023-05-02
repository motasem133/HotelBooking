import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, throwError } from "rxjs";






@Injectable({ providedIn: 'root' })
export class AuthService {



  constructor(private http: HttpClient) { }


  login(value:any) {
    const body={
      username: value.username,
      password:value.password
    }
    return this.http.post('https://fakestoreapi.com/auth/login', body).pipe(catchError(this.handelError));

  }
  adduser(value: any) {
    const body = {
      email: value.email,
      username: value.username,
      password: value.password,
      name:( {
        firstname: value.firstname,
        lastname:value.lastname
      }),
      phone: value.phone,
      address: value.address,
      }

    return this.http.post('https://fakestoreapi.com/users' , body)
  }

  private handelError(errorRes: HttpErrorResponse) {

        let errorMessage = 'An unknown error occurred!';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'An error occurred! user not found.';
                break;

            case 'INVALID_PASSWORD':
                errorMessage = 'An error occurred! passoword is incorrect.';
                break;

            case 'USER_DISABLED':
                errorMessage = 'An error occurred! user is disabled.';
                break;
            case 'EMAIL_EXISTS':
                errorMessage = 'An error occurred! email already exist.';
                break;

            case 'OPERATION_NOT_ALLOWED':
                errorMessage = 'An error occurred! Password incorrect.';
                break;

            case 'TOO_MANY_ATTEMPTS_TRY_LATER:':
                errorMessage = 'An error occurred! Too many attempts please try again later.';
                break;


        }
        return throwError(errorMessage);
    }
 }



































  //   switch (errorRes.error.error.message) {
  //     case 'EMAIL_NOT_FOUND':
  //       errorMessage = 'An error occurred! user not found.';
  //       break;

  //     case 'INVALID_PASSWORD':
  //       errorMessage = 'An error occurred! passoword is incorrect.';
  //       break;

  //     case 'USER_DISABLED':
  //       errorMessage = 'An error occurred! user is disabled.';
  //       break;
  //     case 'EMAIL_EXISTS':
  //       errorMessage = 'An error occurred! email already exist.';
  //       break;

  //     case 'OPERATION_NOT_ALLOWED':
  //       errorMessage = 'An error occurred! Password incorrect.';
  //       break;

  //     case 'TOO_MANY_ATTEMPTS_TRY_LATER:':
  //       errorMessage = 'An error occurred! Too many attempts please try again later.';
  //       break;


  //   }
  //   return throwError(errorMessage);
  // }

