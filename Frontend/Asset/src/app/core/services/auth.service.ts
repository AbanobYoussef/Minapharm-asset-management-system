import { Injectable } from '@angular/core';
import { endpoints } from '../models/endpoints.model';
import { IResponse } from '../models/iresponse';
import { catchError, map, of } from 'rxjs';
import { HttpService } from './http.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpService) { }


    register(obj: any) {
        return this.http.post(endpoints.Auth.Register, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }

    login(obj: any) {
        return this.http.post(endpoints.Auth.login, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }

    forgetPassword(email: any) {
        return this.http.get(endpoints.Auth.forgot, email)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }

    resetPassword(obj: any) {
        return this.http.post(endpoints.Auth.ResetPassword, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }

}
