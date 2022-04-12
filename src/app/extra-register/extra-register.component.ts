import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-extra-register',
  templateUrl: './extra-register.component.html',
  styleUrls: ['./extra-register.component.css']
})
export class ExtraRegisterComponent implements OnInit {
  step : any=1;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
submit(){
  this.step = this.step + 1 ;
}
previous()
{
  this.step = this.step - 1 ;
}
next(){
  this.step = this.step + 1 ;
}
successFw() {
  alert('success popup with forward page');
  this.router.navigateByUrl('login');
}

}