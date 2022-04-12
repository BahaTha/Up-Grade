import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-addresses-form',
  templateUrl: './addresses-form.component.html',
  styleUrls: ['./addresses-form.component.css']
})
export class AddressesFormComponent implements OnInit {
  name = 'Angular';

  productForm: FormGroup;

  constructor(private fb:FormBuilder) {

    this.productForm = this.fb.group({
      name: '',
      addresses: this.fb.array([]) ,
    });
  }

  addresses() : FormArray {
    return this.productForm.get("addresses") as FormArray
  }

  newAddress(): FormGroup {
    return this.fb.group({
      address: '',
    })
  }

  addAddress() {
    this.addresses().push(this.newAddress());
  }

  removeAddress(i:number) {
    this.addresses().removeAt(i);
  }

  onSubmit() {
    console.log(this.productForm.value);
  }


  ngOnInit(): void {
  }

}
