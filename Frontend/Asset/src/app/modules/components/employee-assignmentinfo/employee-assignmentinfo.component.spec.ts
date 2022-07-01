import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAssignmentinfoComponent } from './employee-assignmentinfo.component';

describe('EmployeeAssignmentinfoComponent', () => {
  let component: EmployeeAssignmentinfoComponent;
  let fixture: ComponentFixture<EmployeeAssignmentinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAssignmentinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAssignmentinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
