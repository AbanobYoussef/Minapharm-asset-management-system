import { TestBed } from '@angular/core/testing';

import { EmployeeAddressesService } from './employee-addresses.service';

describe('EmployeeAddressesService', () => {
  let service: EmployeeAddressesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeAddressesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
