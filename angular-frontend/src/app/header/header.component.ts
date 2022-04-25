import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  user:User = new User();
  loggedinUser: any
  verif:boolean = false;
  constructor(private authService : AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  userLogin(){console.log(this.user)
    this.authService.loginUser(this.user).subscribe(data=>{return true},error=>{return false});
    
    }
    loggedin(){
     
      if (this.user.username!='' && this.user.password!='')
     this.verif=true ;
    return this.verif;
      
    }
    logOut() {
    this.user.username='' ;
    this.user.password='';
    this.router.navigate(["/login"]) ; 
    console.log(this.user)
    this.verif=false;
    }

}
