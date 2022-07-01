import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { endpoints } from '../models/endpoints.model';
import { IResponse } from '../models/iresponse';
import { HttpService } from './http.service';
@Injectable({
    providedIn: 'root'
})
export class EmployeeAssignmentinfoService {

    constructor(private http: HttpService) { }
    getEmployeeAssignmentInfoByEmpId(id: any) {
        return this.http.get(endpoints.EmployeeAssignmentInfo.GetEmployeeAssignmentInfoByEmpId, id)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    editEmployeeAssignmentInfo(obj: any) {
        return this.http.post(endpoints.EmployeeAssignmentInfo.EditEmployeeAssignmentInfo, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    addEmployeeAssignmentInfo(obj: any) {
        return this.http.post(endpoints.EmployeeAssignmentInfo.AddEmployeeAssignmentInfo, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    deleteEmployeeAssignmentInfoById(id) {
        return this.http.get(endpoints.EmployeeAssignmentInfo.DeleteEmployeeAssignmentInfoById, id)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
}
