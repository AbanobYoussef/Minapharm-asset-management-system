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
export class PositionService {

    constructor(private http: HttpService) { }
    getAllPositions() {
        return this.http.get(endpoints.Position.GetAllPositions)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    getPositionsByCompanyId(id) {
        return this.http.get(endpoints.Position.GetPositionsByCompanyId,id)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }

    getPositionById(id) {
        return this.http.get(endpoints.Position.GetPositionById, id)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    editPosition(obj: any) {
        return this.http.post(endpoints.Position.EditPosition, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    addPosition(obj: any) {
        return this.http.post(endpoints.Position.AddPosition, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    importFIlePositions(obj: any) {
        return this.http.post(endpoints.Position.ImportFIlePositions, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    deletePositionById(id) {
        return this.http.get(endpoints.Position.DeletePositionById, id)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
}
