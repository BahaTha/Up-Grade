import { Component, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject} from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dialog-delete-user',
  templateUrl: './dialog-delete-user.component.html',
  styleUrls: ['./dialog-delete-user.component.css']
})
export class DialogDeleteUserComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogDeleteUserComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any, public userService: UserService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.userService.delete(this.data.id);
  } 
  ngOnInit(): void {
  }
}