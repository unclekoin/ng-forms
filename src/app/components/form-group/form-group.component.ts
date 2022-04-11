import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent {
  public user = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl(),
    phones: new FormArray([
      this.createPhone()
    ])
  });

  get phones() {
    return this.user.get('phones') as FormArray;
  }

  public createPhone() {
    return new FormGroup({
      type: new FormControl(),
      number: new FormControl()
    });
  }

  public addPhone() {
    this.phones.push(this.createPhone());
  }

  public onSubmit() {
    console.log(this.user.value);
  }
}
