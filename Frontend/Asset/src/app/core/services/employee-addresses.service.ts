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
export class EmployeeAddressesService {

    constructor(private http: HttpService) { }

    getEmployeeAddressByEmpId(id: any) {
        return this.http.get(endpoints.EmployeeAddresses.GetEmployeeAddressByEmpId, id)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    editEmployeeAddress(obj: any) {
        return this.http.post(endpoints.EmployeeAddresses.EditEmployeeAddress, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    addEmployeAddEmployeeAddresse(obj: any) {
        return this.http.post(endpoints.EmployeeAddresses.AddEmployeeAddress, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    deleteEmployeeAddressById(id) {
        return this.http.get(endpoints.EmployeeAddresses.DeleteEmployeeAddressById, id)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
}
