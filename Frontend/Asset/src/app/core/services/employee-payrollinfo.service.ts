import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { endpoints } from '../models/endpoints.model';
import { IResponse } from '../models/iresponse';
import { HttpService } from './http.service';
@Injectable({
    providedIn: 'root'
})
export class EmployeePayrollinfoService {

    constructor(private http: HttpService) { }
    getEmployeePayrollInfoByEmpId(id: any) {
        return this.http.get(endpoints.EmployeePayroll_Info.GetEmployeePayroll_InfoByEmpId, id)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    editEmployeePayrollInfo(obj: any) {
        return this.http.post(endpoints.EmployeePayroll_Info.EditEmployeePayroll_Info, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    addEmployeePayrollInfo(obj: any) {
        return this.http.post(endpoints.EmployeePayroll_Info.AddEmployeePayroll_Info, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    deleteEmployeePayrollInfoById(id) {
        return this.http.get(endpoints.EmployeePayroll_Info.DeleteEmployeePayroll_InfoById, id)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
}
