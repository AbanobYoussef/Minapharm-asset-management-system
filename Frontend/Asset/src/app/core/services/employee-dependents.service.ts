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
export class EmployeeDependentsService {

    constructor(private http: HttpService) { }
    getAllEmployeeDependentByEmpId(id: any) {
        return this.http.get(endpoints.EmployeeDependent.GetAllEmployeeDependentByEmpId, id)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    editEmployeeDependent(obj: any) {
        return this.http.post(endpoints.EmployeeDependent.EditEmployeeDependent, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    addEmployeeDependent(obj: any) {
        return this.http.post(endpoints.EmployeeDependent.AddEmployeeDependent, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    deleteEmployeeDependentById(id) {
        return this.http.get(endpoints.EmployeeDependent.DeleteEmployeeDependentById, id)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
}
