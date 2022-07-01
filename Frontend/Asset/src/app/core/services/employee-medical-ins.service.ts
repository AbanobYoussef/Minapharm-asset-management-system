import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { endpoints } from '../models/endpoints.model';
import { IResponse } from '../models/iresponse';
import { HttpService } from './http.service';
@Injectable({
    providedIn: 'root'
})
export class EmployeeMedicalInsService {

    constructor(private http: HttpService) { }
    getMedicalInsuranceByEmpId(id: any) {
        return this.http.get(endpoints.EmployeeMedicalIns.GetMedicalInsuranceByEmpId, id)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    getMedicalInsuranceCompany() {
        return this.http.get(endpoints.EmployeeMedicalIns.GetMedicalInsuranceCompany)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    editMedicalInsurance(obj: any) {
        return this.http.post(endpoints.EmployeeMedicalIns.EditMedicalInsurance, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    addMedicalInsurance(obj: any) {
        return this.http.post(endpoints.EmployeeMedicalIns.AddMedicalInsurance, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    deleteMedicalInsuranceById(id) {
        return this.http.get(endpoints.EmployeeMedicalIns.DeleteMedicalInsuranceById, id)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
}
