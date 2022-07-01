import { Injectable } from '@angular/core';
import { endpoints } from '../models/endpoints.model';
import { IResponse } from '../models/iresponse';
import { catchError, map, of } from 'rxjs';
import { HttpService } from './http.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CityService {

    constructor(private http: HttpService) { }

    getAllCities() {
        return this.http.get(endpoints.City.GetAllCities)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }

}
