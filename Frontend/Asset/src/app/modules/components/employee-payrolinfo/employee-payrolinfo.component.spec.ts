import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePayrolinfoComponent } from './employee-payrolinfo.component';

describe('EmployeePayrolinfoComponent', () => {
  let component: EmployeePayrolinfoComponent;
  let fixture: ComponentFixture<EmployeePayrolinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePayrolinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePayrolinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
