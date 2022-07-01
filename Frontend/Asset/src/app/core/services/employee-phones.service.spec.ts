import { TestBed } from '@angular/core/testing';

import { EmployeePhonesService } from './employee-phones.service';

describe('EmployeePhonesService', () => {
  let service: EmployeePhonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeePhonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
