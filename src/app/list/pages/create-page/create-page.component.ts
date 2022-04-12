import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  public Item: any;

  constructor() { }

  ngOnInit(): void {
  }

  public saveItem(value: any) {
    this.Item = value;
  }

}
