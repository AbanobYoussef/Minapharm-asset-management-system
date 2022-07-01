import { TestBed } from '@angular/core/testing';

import { EmployeePayrollinfoService } from './employee-payrollinfo.service';

describe('EmployeePayrollinfoService', () => {
  let service: EmployeePayrollinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeePayrollinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
