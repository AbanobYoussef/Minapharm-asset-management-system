import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { endpoints } from '../models/endpoints.model';
import { IResponse } from '../models/iresponse';
import { HttpService } from './http.service';
@Injectable({
    providedIn: 'root'
})
export class BankService {

    constructor(private http: HttpService) { }
    getAllBanks() {
        return this.http.get(endpoints.Bank.GetAllBanks)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
}
