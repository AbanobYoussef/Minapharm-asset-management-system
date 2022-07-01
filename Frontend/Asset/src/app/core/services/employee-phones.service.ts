import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { endpoints } from '../models/endpoints.model';
import { IRequest } from '../models/irequest';
import { IResponse } from '../models/iresponse';
import { HttpService } from './http.service';
@Injectable({
    providedIn: 'root'
})
export class EmployeePhonesService {

    constructor(private http: HttpService) { }
    getEmployeePhoneByEmpId(id: any) {
        return this.http.get(endpoints.EmployeePhones.GetEmployeePhoneByEmpId, id)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    editEmployeePhone(obj: any) {
        return this.http.post(endpoints.EmployeePhones.EditEmployeePhone, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    addEmployeePhone(obj: any) {
        return this.http.post(endpoints.EmployeePhones.AddEmployeePhone, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    deleteEmployeePhoneById(id) {
        return this.http.get(endpoints.EmployeePhones.DeleteEmployeePhoneById, id)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
}
