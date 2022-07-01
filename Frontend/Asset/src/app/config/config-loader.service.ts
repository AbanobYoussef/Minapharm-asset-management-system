import { HttpBackend, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class ConfigsLoaderService {
    private httpClient: HttpClient;
    configs: any = null;
    constructor(handler: HttpBackend) {
        this.httpClient = new HttpClient(handler);
        this.loadConfigs();
    }


    public loadConfigs(): Promise<any> {
        return this.httpClient.get('assets/configs.json')
            .toPromise()
            .then((result: any) => {
                ConfigLoader.production = result.production;
                ConfigLoader.baseUrl = result.baseUrl;
                ConfigLoader.recaptchaSiteKey = result.recaptchaSiteKey;
                return Promise.resolve(result);
            });
    }
}

export const ConfigLoader = {
    production: false,
    // baseUrl:'https://localhost:44395/',
     baseUrl:'https://localhost:7140/',
   // baseUrl: 'https://hrapi.gtwit.net/',
    recaptchaSiteKey: ''
}

