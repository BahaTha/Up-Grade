import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';
import {MatDialog} from '@angular/material/dialog';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogDeleteUserComponent } from '../dialog-delete-user/dialog-delete-user.component';

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
  delteUser(u:User){
    this.userService.delete(u.id);
  }
  constructor(private userService: UserService, public dialog: MatDialog) { }
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
  startEdit(u : User) {
    const dialogRef = this.dialog.open(DialogEditUserComponent, {
      data: u
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {

        // const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
        // this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
        // And lastly refresh table
        this.refreshTable();
      }
    });
  }

  deleteItem(u:User) {
    const dialogRef = this.dialog.open(DialogDeleteUserComponent, {
      data: {u}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
        // // for delete we use splice in order to remove single object from DataService
        // this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
        this.refreshTable();
      }
    });
  }
  private refreshTable() {
  }
}
