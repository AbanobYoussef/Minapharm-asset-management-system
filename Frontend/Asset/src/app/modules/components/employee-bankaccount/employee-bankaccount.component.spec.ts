import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBankaccountComponent } from './employee-bankaccount.component';

describe('EmployeeBankaccountComponent', () => {
  let component: EmployeeBankaccountComponent;
  let fixture: ComponentFixture<EmployeeBankaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeBankaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeBankaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
