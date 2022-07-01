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
export class EmployeeContractService {

    constructor(private http: HttpService) { }
    getEmployeeContractByEmpId(id: any) {
        return this.http.get(endpoints.EmployeeCotract.GetEmployeeContractByEmpId, id)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    editEmployeeContract(obj: any) {
        return this.http.post(endpoints.EmployeeCotract.EditEmployeeContract, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    addEmployeeContract(obj: any) {
        return this.http.post(endpoints.EmployeeCotract.AddEmployeeContract, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    deleteEmployeeContractById(id) {
        return this.http.get(endpoints.EmployeeCotract.DeleteEmployeeContractById, id)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
}
