import { HttpBackend, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { catchError, map, Observable, of } from 'rxjs';
import { ConfigLoader } from 'src/app/config/config-loader.service';
import { EndpointHeader } from '../models/endpoints.model';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    loading: any[] = [];
    private _httpClient: HttpClient;
    private _baseUrl = ConfigLoader.baseUrl;
    public _endpoints: EndpointHeader = {
        contentType: '',
        isAuthorizationRequired: false,
        path: '',
        isRequiredHttpHeader: false
    };
    constructor(handler: HttpBackend,
        private router: Router,
        public messagesService: MessageService
    ) {
        this._httpClient = new HttpClient(handler);
    }
    public get(endpoints: EndpointHeader, data?: any, header?: HttpHeaders): Observable<any> {
        let index = this.loading.length;
        this.showLoader(index);
        this._endpoints = this.getEndpointHeader(endpoints);
        if (header == null || header == undefined) {
            header = this.buildRequestHeaders(this._endpoints);
        }
        let options = {
            headers: header
        };

        if (this._endpoints.isRequiredHttpHeader) {
            data = (data == null || data == undefined) ? "" : data;

            return this._httpClient.get(this._baseUrl + this._endpoints.path + '/' + data, options).pipe(map(data => {
                this.dismiss(index);
                return data;
            }), catchError((error: HttpErrorResponse) => {
                this.dismiss(index);
                if (error.status == 401) {

                    this.navigateToLogin();
                }
                else {}
                return of();
            }));




        }
        else {
            //debugger
            data = (data == null || data == undefined) ? "" : data;
            return this._httpClient.get(this._baseUrl + this._endpoints.path + '/' + data).pipe(map(data => {
                this.dismiss(index);
                return data;
            }), catchError((error: HttpErrorResponse) => {
                this.dismiss(index);
                if (error.status == 401) {

                    this.navigateToLogin();
                }
                else {
                }
                return of();
            }));
        }
    }

    public post(endpoints: EndpointHeader, data: any, header?: HttpHeaders): Observable<any> {
        let index = this.loading.length;

        this.showLoader(index);

        this._endpoints = this.getEndpointHeader(endpoints);
        if (header == null || header == undefined) {
            header = this.buildRequestHeaders(this._endpoints);
        }
        let options = {
            headers: header
        };

        if (this._endpoints.isRequiredHttpHeader) {
            return this._httpClient.post(this._baseUrl + this._endpoints.path, data, options)
                .pipe(map((response: any) => {
                    if (response["token"] === "Invaild Password Or UserName") {
                        // let message = '';
                        this.messagesService.toastNotification("Authentication", "Invaild Password Or UserName", true)

                        response = ""
                        ///this.SpinnerService.hide();
                        console.log("res", response)
                        return response
                    }
                    else if (response["token"] === "deactivateuser") {
                        this.messagesService.toastNotification("Authentication", "Your Account is Deactivate", true)
                        // this.SpinnerService.hide();
                    }
                    else if (response["token"] === "emailnotverified") {
                        this.messagesService.toastNotification("Authentication", "User Email Not Verified", true)
                        //this.SpinnerService.hide();
                    }
                    else if (response["token"] === "User Not Exist In System") {
                        this.messagesService.toastNotification("Authentication", response["token"], true)
                        // this.SpinnerService.hide();
                    }
                    else {
                        /// this.SpinnerService.hide();
                        return response;
                    }

                }),
                    catchError((error: HttpErrorResponse) => {
                        if (error.status == 404) {
                            // let message = '';
                            //   this.translate.get('User Not Found').subscribe(a => {
                            //     message = a;
                            //     this.showToast(message);
                            //   });
                            //alert("There is No User Exist With This Name");
                            // this.messagesService.toastNotification("Authentication","There is No User Exist With This Name",true)

                            //   this.messagesService.alertBox("There is No User Exist With This Name",true)

                            // return "NotFound";
                        }
                        return of();


                    }));;
        }
        else {
            return this._httpClient.post(this._baseUrl + this._endpoints.path, data)
                .pipe(map(data => {
                    this.dismiss(index);
                    return data;
                }), catchError((error: HttpErrorResponse) => {
                    this.dismiss(index);
                    if (error.status == 401) {
                        this.navigateToLogin();
                    }
                    else {
                    }
                    return of();
                }));
        }
    }

    private getEndpointHeader(ep: EndpointHeader): EndpointHeader {
        this._endpoints.contentType = ep.contentType;
        this._endpoints.isAuthorizationRequired = ep.isAuthorizationRequired;
        this._endpoints.path = ep.path;
        this._endpoints.isRequiredHttpHeader = ep.isRequiredHttpHeader;
        return this._endpoints;
    }

    private buildRequestHeaders(endpoints: EndpointHeader): HttpHeaders {
        let headers = this.getDefaultHeader(endpoints.contentType);
        if (endpoints.isAuthorizationRequired) {
            let _apiToken = localStorage.getItem('token');
            let authCode = 'Bearer ' + _apiToken;
            headers.Authorization = authCode;
        }
        return new HttpHeaders(headers)
    }

    private getDefaultHeader(contentType): any {
        if (contentType != '') {
            return {
                'Content-Type': contentType,
                'APIAuthorization': 'APIToken GG4VN9Ni3n0Hmk7OGEHEDR+Eqr8t1UIAm2Y+INLTi7KSjNwOnSD6CFSkCCCV2dHQPhZ7VLJpVe+WT0V6opkjUw=='
            };
        }
        else {
            return {
                'APIAuthorization': 'APIToken GG4VN9Ni3n0Hmk7OGEHEDR+Eqr8t1UIAm2Y+INLTi7KSjNwOnSD6CFSkCCCV2dHQPhZ7VLJpVe+WT0V6opkjUw=='
            };
        }
    }

    public navigateToLogin() {
        this.router.navigate(['/Notpermited']);
    }

    async presentToastWithOptions(message: string) {
        alert(message);
        // const toast = await this.toastController.create({
        //   message: message,
        //   duration: 2000,
        //   animated:true,
        //   position: 'top'
        // });
        // toast.present();
    }

    private async showLoader(index: number) {
        // alert("loading..");
        // this.loading.push(await this.loadingCtrl.create({
        //   message:''
        // }));
        // this.loading[index].present();
    }

    private dismiss(index: number) {
        let interval = setInterval(() => {
            if (this.loading.length > (index) &&
                this.loading[index] != undefined) {
                this.loading[index].dismiss();
                clearInterval(interval);
            }
        }, 1000);
    }
}
