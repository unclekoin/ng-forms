import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnNgModelComponent } from './own-ng-model.component';

describe('OwnNgModelComponent', () => {
  let component: OwnNgModelComponent;
  let fixture: ComponentFixture<OwnNgModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnNgModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
