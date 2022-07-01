import { Injectable } from '@angular/core';
import { endpoints } from '../models/endpoints.model';
import { IResponse } from '../models/iresponse';
import { catchError, map, of } from 'rxjs';
import { HttpService } from './http.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class OrganizationService {

    constructor(private http: HttpService) { }


    getAllOrganizations() {
        return this.http.get(endpoints.Organization.GetAllOrganizations)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    getAllOrganizationsByCompanyId(id) {
        return this.http.get(endpoints.Organization.GetAllOrganizationsByCompanyId,id)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }


    editOrganization(obj: any) {
        return this.http.post(endpoints.Organization.EditOrganization, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }


    addOrganization(obj: any) {
        return this.http.post(endpoints.Organization.AddOrganization, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
    deleteOrganization(id) {
        return this.http.get(endpoints.Organization.DeleteOrganization, id)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }

    uploadFileExecl(obj: any) {
        return this.http.post(endpoints.Organization.uploadFileExecl, obj)
            .pipe(map((res: IResponse) => {
                return res?.content;
            }), catchError((error: HttpErrorResponse) => {
                return of();
            }));
    }
}
