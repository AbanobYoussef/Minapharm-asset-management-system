import { Injectable } from '@angular/core';
import { endpoints } from '../models/endpoints.model';
import { IResponse } from '../models/iresponse';
import { catchError, map, of } from 'rxjs';
import { HttpService } from './http.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CompanyService {

    constructor(private http: HttpService) { }

    getAllCompanys() {
        return this.http.get(endpoints.Company.GetAllCompanys)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }

    GetCompanyByUserID(id: string) {
        return this.http.get(endpoints.Company.GetCompanyByUserID, id)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }

  GetCompanyByID(id){ 
    return this.http.get(endpoints.Company.GetCompanyByID,id)
    .pipe(map((res:IResponse)  => {
      console.log(res)
        return res?.content;
    }), catchError((error: HttpErrorResponse) => {
      return of();
  }));
  }




  EditCompany(obj: any){
    return this.http.post(endpoints.Company.EditCompany, obj)
        .pipe(map((res: IResponse) => {
            return res?.content;
        }), catchError((error: HttpErrorResponse) => {
            return of();
        }));
  }



    AddCompany(obj: any) {
        return this.http.post(endpoints.Company.AddCompany, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    DeleteCompany(id) {
        return this.http.get(endpoints.Company.DeleteCompany, id)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }

    uploadFileExecl(obj: any) {
        return this.http.post(endpoints.Company.uploadFileExecl, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
}
