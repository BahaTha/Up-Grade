import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  name = 'Angular';
  displayTimeline = true;
  displayTasks = false;
  displaySettings = false;

  onPressTimeline() {
    this.displaySettings = false;
    this.displayTasks = false;
    //this.display = true;
    //To toggle the component
    this.displayTimeline = !this.displayTimeline;

  }
  onPressTasks() {
    this.displayTimeline = false;
   this.displaySettings = false;
    //this.display = true;
    //To toggle the component
    this.displayTasks = !this.displayTasks;
  }
  onPressSettings() {
    this.displayTimeline = false;
    this.displayTasks = false;
    //this.display = true;
    //To toggle the component
    this.displaySettings = !this.displaySettings;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
