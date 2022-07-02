import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { DialogModule } from 'primeng/dialog';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import {
    NgxAwesomePopupModule,
    DialogConfigModule,
    ConfirmBoxConfigModule,
    ToastNotificationConfigModule
} from '@costlydeveloper/ngx-awesome-popup';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { NgDialogAnimationService } from 'ng-dialog-animation';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeComponent } from './modules/components/employee/employee.component';
import { EmploeeService } from './core/services/Emploee.service';
import { TranslationService } from './core/services/translation.service';
import { ConfigsLoaderService } from './config/config-loader.service';
import { MessageService } from 'primeng/api';
import { TranspoetAssetComponent } from './modules/components/transpoet-asset/transpoet-asset.component';
import { DeviceAssetComponent } from './modules/components/device-asset/device-asset.component';
import { SidebarComponent } from './modules/components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    TranspoetAssetComponent,
    DeviceAssetComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    DialogModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    ToastNotificationConfigModule.forRoot(),
  ],
  providers: [
    ConfigsLoaderService,
    EmploeeService,
    TranslationService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      multi: true,
      deps: [ConfigsLoaderService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function appInitializerFactory(configsLoaderService: ConfigsLoaderService) {
  return () => configsLoaderService.loadConfigs();
}