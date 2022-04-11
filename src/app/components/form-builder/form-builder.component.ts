import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  public userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.max(100)]],
      phones: this.formBuilder.array([
        this.createPhone()
      ])
    })
  }

  get phones() {
    return this.userForm.get('phones') as FormArray;
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
    console.log(this.userForm.value);
  }

}
