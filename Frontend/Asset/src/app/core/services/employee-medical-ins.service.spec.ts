import { TestBed } from '@angular/core/testing';

import { EmployeeMedicalInsService } from './employee-medical-ins.service';

describe('EmployeeMedicalInsService', () => {
  let service: EmployeeMedicalInsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeMedicalInsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
