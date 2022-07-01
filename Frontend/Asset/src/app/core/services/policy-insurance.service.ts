import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { endpoints } from '../models/endpoints.model';
import { IResponse } from '../models/iresponse';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root'
}) 
export class PolicyInsuranceService {

  constructor(private http: HttpService) { }
  getAllInsurancePolicys() {
    return this.http.get(endpoints.PolicyInsurance.GetAllInsurancePolicys)
        .pipe(map((res: IResponse) => {
            return res?.content;
        }), catchError((error: HttpErrorResponse) => {
            return of();
        }));
}
getPolicyByInsuranceCompanyId(id) {
  return this.http.get(endpoints.PolicyInsurance.getInsurancePolicyByInsuranceCompanyId,id)
      .pipe(map((res: IResponse) => {
          return res?.content;
      }), catchError((error: HttpErrorResponse) => {
          return of();
      }));
}
GetInsurancePolicyByPolicyId(id) {
  return this.http.get(endpoints.PolicyInsurance.GetInsurancePolicyByPolicyId,id)
      .pipe(map((res: IResponse) => {
          return res?.content;
      }), catchError((error: HttpErrorResponse) => {
          return of();
      }));
}
}
