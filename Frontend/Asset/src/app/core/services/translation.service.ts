import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TranslationService {

    public currentLanguage: string = 'en';
    public currentLayout: string = 'ltr';
    public getCurrentLang = new Subject<string>();
    public getCurrentLayout = new Subject<string>();
    Layout: string;

    constructor(public translateService: TranslateService) {
        this.initTranslation(null);
    }
    initTranslation(lang: string) {
        let userLang = (lang != null && lang != undefined) ? lang : localStorage.getItem("prefLang") ? localStorage.getItem("prefLang") : 'en';
        this.translateService.setDefaultLang(userLang);
        this.translateService.use(userLang);
        localStorage.setItem("prefLang", userLang);
        if (userLang == 'ar') {
            this.currentLayout = 'rtl';
            this.currentLayout = 'rtl';
            this.currentLanguage = 'ar';
        } else {
            this.currentLayout = 'ltr';
            this.currentLayout = 'ltr';
            this.currentLanguage = 'en';
        }
        this.getCurrentLang.next(this.currentLanguage);
        this.getCurrentLayout.next(this.currentLayout);
    }

    get(keyName: string) {
        return this.translateService.get(keyName);
    }

    changeLanguage(language) {

        this.initTranslation(language);

    }
    layout(language: string) {
        this.initTranslation(language);
    }
}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
