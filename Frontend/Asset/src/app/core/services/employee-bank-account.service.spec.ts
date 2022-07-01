import { TestBed } from '@angular/core/testing';

import { EmployeeBankAccountService } from './employee-bank-account.service';

describe('EmployeeBankAccountService', () => {
  let service: EmployeeBankAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeBankAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
