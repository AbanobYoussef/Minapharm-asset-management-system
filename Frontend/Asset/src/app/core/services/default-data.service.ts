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
export class DefaultDataService {

    constructor(private http: HttpService) { }
    getAllDefaultDataByTypeId(typeId,comId) {
        return this.http.get(endpoints.DefaultData.GetAllDefaultDataByTypeId, typeId+'/'+comId)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    editDefaultData(obj: any) {
        return this.http.post(endpoints.DefaultData.EditDefaultData, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    addDefaultData(obj: any) {
        return this.http.post(endpoints.DefaultData.AddDefaultData, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    deleteDefaultData(obj: any) {
        return this.http.post(endpoints.DefaultData.DeleteDefaultData, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
}
