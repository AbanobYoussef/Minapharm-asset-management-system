import { Injectable } from '@angular/core';
import { endpoints } from '../models/endpoints.model';
import { IResponse } from '../models/iresponse';
import { catchError, map, of } from 'rxjs';
import { HttpService } from './http.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TranspoetAssetService {

    constructor(private http: HttpService) { }

    getAll() {
        return this.http.get(endpoints.Transport.GetAll)
            .pipe(map((res) => {
                return res;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }

  
  Edit(obj: any){
    return this.http.post(endpoints.Transport.Edit, obj)
        .pipe(map((res) => {
            return res;
        }), catchError((error: HttpErrorResponse) => {
            return of();
        }));
  }

    Add(obj: any) {
        return this.http.post(endpoints.Transport.Add, obj)
            .pipe(map((res) => {
                return res;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }

    Delete(id) {
        return this.http.post(endpoints.Transport.Delete, id)
            .pipe(map((res) => {
                return res;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }

  
}
