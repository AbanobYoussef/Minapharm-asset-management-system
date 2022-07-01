import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMedicalInsComponent } from './employee-medical-ins.component';

describe('EmployeeMedicalInsComponent', () => {
  let component: EmployeeMedicalInsComponent;
  let fixture: ComponentFixture<EmployeeMedicalInsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeMedicalInsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeMedicalInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
