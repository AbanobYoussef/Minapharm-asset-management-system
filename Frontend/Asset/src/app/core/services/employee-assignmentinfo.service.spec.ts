import { TestBed } from '@angular/core/testing';

import { EmployeeAssignmentinfoService } from './employee-assignmentinfo.service';

describe('EmployeeAssignmentinfoService', () => {
  let service: EmployeeAssignmentinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeAssignmentinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
