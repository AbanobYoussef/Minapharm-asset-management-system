import { Injectable } from '@angular/core';
import { endpoints } from '../models/endpoints.model';
import { IResponse } from '../models/iresponse';
import { catchError, map, of } from 'rxjs';
import { HttpService } from './http.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DeviceAssetService {

    constructor(private http: HttpService) { }

    getAll() {
        return this.http.get(endpoints.Device.GetAll)
            .pipe(map((res) => {
                return res;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }

  
  Edit(obj: any){
    return this.http.post(endpoints.Device.Edit, obj)
        .pipe(map((res) => {
            return res;
        }), catchError((error: HttpErrorResponse) => {
            return of();
        }));
  }

    Add(obj: any) {
        return this.http.post(endpoints.Device.Add, obj)
            .pipe(map((res) => {
                return res;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }

    Delete(obj: any) {
        return this.http.post(endpoints.Device.Delete, obj)
            .pipe(map((res) => {
                return res;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }

  
}
