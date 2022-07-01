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
export class EmployeeStatusService {

  constructor(private http: HttpService) { }
  getAllEmployeeStatusByCompanyId(id: any) {
    return this.http.get(endpoints.EmployeeStatus.GetAllEmployeeStatusByCompanyId, id)
        .pipe(map((res: IResponse) => {
            return res?.content;
        }), catchError((error: HttpErrorResponse) => {
            return of();
        }));
}
}
