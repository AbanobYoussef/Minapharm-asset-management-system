import { TestBed } from '@angular/core/testing';

import { EmployeeDependentsService } from './employee-dependents.service';

describe('EmployeeDependentsService', () => {
  let service: EmployeeDependentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeDependentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
