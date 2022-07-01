import { TestBed } from '@angular/core/testing';

import { PolicyInsuranceService } from './policy-insurance.service';

describe('PolicyInsuranceService', () => {
  let service: PolicyInsuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicyInsuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
