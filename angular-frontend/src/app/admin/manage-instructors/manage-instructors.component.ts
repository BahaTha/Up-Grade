import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-manage-instructors',
  templateUrl: './manage-instructors.component.html',
  styleUrls: ['./manage-instructors.component.css']
})
export class ManageInstructorsComponent implements OnInit {
  users: any;
  currentuser:User = new User();
  currentIndex = -1;
  username = '';

  validateUser(u:User){
    console.log(u);
  }
  modifyUser(u:User){}
  delteUser(u:User){}
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.retrieveusers();
  }
  retrieveusers(): void {
    this.userService.getAll()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveusers();
    this.currentuser = new User();
    this.currentIndex = -1;
  }
  setActiveuser(user: User, index: any): void {
    this.currentuser = user;
    this.currentIndex = index;
  }
  removeAllusers(): void {
    this.userService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveusers();
        },
        error => {
          console.log(error);
        });
  }
  searchusername(): void {
    this.userService.findByusername(this.username)
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
