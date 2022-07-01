import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePhonesComponent } from './employee-phones.component';

describe('EmployeePhonesComponent', () => {
  let component: EmployeePhonesComponent;
  let fixture: ComponentFixture<EmployeePhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePhonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
