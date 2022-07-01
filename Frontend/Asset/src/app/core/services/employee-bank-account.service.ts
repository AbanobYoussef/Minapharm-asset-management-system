import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { endpoints } from '../models/endpoints.model';
import { IResponse } from '../models/iresponse';
import { HttpService } from './http.service';
@Injectable({
    providedIn: 'root'
})
export class EmployeeBankAccountService {

    constructor(private http: HttpService) { }
    getEmployeeBankAccountByEmpId(id: any) {
        return this.http.get(endpoints.EmployeeBankAccount.GetEmployeeBankAccountByEmpId, id)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    editEmployeeBankAccount(obj: any) {
        return this.http.post(endpoints.EmployeeBankAccount.EditEmployeeBankAccount, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    addEmployeeBankAccount(obj: any) {
        return this.http.post(endpoints.EmployeeBankAccount.AddEmployeeBankAccount, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    deleteEmployeeBankAccountById(id) {
        return this.http.get(endpoints.EmployeeBankAccount.DeleteEmployeeBankAccountById, id)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
}
