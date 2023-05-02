import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/auth/services/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  currentUser: any
  constructor(   ){}
  ngOnInit(): void {
    this.currentUser =
        JSON.parse(localStorage.getItem("userData") || "{}")

      console.log(this.currentUser)
  }
  logout() {
    this.currentUser =  localStorage.setItem('userToken', '');
  }
}
