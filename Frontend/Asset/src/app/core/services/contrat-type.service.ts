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
export class ContratTypeService {

    constructor(private http: HttpService) { }

    getAllContractTypes() {
        return this.http.get(endpoints.ContractType.GetAllContractTypes)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    editContractType(obj: any) {
        return this.http.post(endpoints.ContractType.EditContractType, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    addContractType(obj: any) {
        return this.http.post(endpoints.ContractType.AddContractType, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    deleteContractTypeById(obj: any) {
        return this.http.post(endpoints.ContractType.DeleteContractTypeById, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
}
