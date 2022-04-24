import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';
@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.css']
})
export class DialogEditUserComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any, public userService: UserService) { }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
    this.userService.update(this.data.id, this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.userService.update(this.data.id, this.data);
  }
  ngOnInit(): void {
    
  }
}