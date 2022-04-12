import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {
  name = 'Angular';
  displayCustomer = false;
  displayDeliveryGuy = false;
  displayStore = false;

  onPressCustomer() {
    this.displayStore = false;
    this.displayDeliveryGuy = false;
    //this.display = true;
    //To toggle the component
    this.displayCustomer = !this.displayCustomer;
  }
  onPressDeliveryGuy() {
    this.displayCustomer = false;
   this.displayStore = false;
    //this.display = true;
    //To toggle the component
    this.displayDeliveryGuy = !this.displayDeliveryGuy;
  }
  onPressStore() {
    this.displayCustomer = false;
    this.displayDeliveryGuy = false;
    //this.display = true;
    //To toggle the component
    this.displayStore = !this.displayStore;
  }
}
