import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  password: any
  username: any
  message: any

  constructor(private service: AuthService,private router:Router) { }

  ngOnInit() {
  }

  doLogin() {
    let resp = this.service.login(this.username,this.password);
    resp.subscribe(data => {this.message=data;
    this.router.navigate(["/"]);
    })
    ;
  }
}