import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
  public itemForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.itemForm = this.fb.group({
      id: ['', [Validators.required, this.isInteger]],
      name: ['', Validators.required]
    })
  }

  public isInteger(control: AbstractControl) {
    return Number.isInteger(+control.value) ? null : { noInteger: {value: control.value}}
  }

  public submit() {
    console.log('submit:', this.itemForm.value);
  }

}

