import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigLoader, ConfigsLoaderService } from './config/config-loader.service';
import { HttpLoaderFactory } from './core/services/translation.service';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './modules/pages/login/login.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { SidebarComponent } from './modules/components/sidebar/sidebar.component';
import { EmployeePageComponent } from './modules/components/employee-page/employee-page.component';

import { EmployeeService } from './core/services/employee.service';
import { CityService } from './core/services/city.service';
import { CountryService } from './core/services/country.service';
import { LocationService } from './core/services/location.service';
import { ReactiveFormsModule } from '@angular/forms';

import { DialogModule } from 'primeng/dialog';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

import { ButtonModule } from 'primeng/button';
import { ContractTypeComponent } from './modules/components/contract-type/contract-type.component';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import {
    NgxAwesomePopupModule,
    DialogConfigModule,
    ConfirmBoxConfigModule,
    ToastNotificationConfigModule
} from '@costlydeveloper/ngx-awesome-popup';
import { TableModule } from 'primeng/table';
import { CompanyComponent } from './modules/components/Company/company/company.component';
import { OrganizationComponent } from './modules/components/organization/organization.component';
import { JobsComponent } from './modules/components/jobs/jobs.component';
import { PositionsComponent } from './modules/components/positions/positions.component';
import { DropdownModule } from 'primeng/dropdown';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { EmployeeDepentsComponent } from './modules/components/employee-depents/employee-dependents.component';
import { EmployeePhonesComponent } from './modules/components/employee-phones/employee-phones.component';
import { EditEmployeeComponent } from './modules/components/edit-employee/edit-employee.component';
import { EmployeeAddressComponent } from './modules/components/employee-address/employee-address.component';
import { EmployeeTabsComponent } from './modules/components/employee-tabs/employee-tabs.component';
import { EmployeeContractComponent } from './modules/components/employee-contract/employee-contract.component';
import { RegisterComponent } from './modules/pages/register/register/register.component';
import { ForgetpasswordComponent } from './modules/pages/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './modules/pages/resetpassword/resetpassword.component';
import { EmployeeBankaccountComponent } from './modules/components/employee-bankaccount/employee-bankaccount.component';
import { EmployeeAssignmentinfoComponent } from './modules/components/employee-assignmentinfo/employee-assignmentinfo.component';
import { EmployeePayrolinfoComponent } from './modules/components/employee-payrolinfo/employee-payrolinfo.component';
import { TestComponent } from './modules/pages/test/test.component';
import { EmployeeMedicalInsComponent } from './modules/components/employee-medical-ins/employee-medical-ins.component';
import { UserCompanyComponent } from './modules/components/user-company/user-company.component';
import { NotpermitedComponent } from './modules/components/notpermited/notpermited.component';
import { SharedModule } from 'primeng/api';
import { CoreModule } from './modules/@core/core.module';
import { NgDialogAnimationService } from 'ng-dialog-animation';
import { MatDialog } from '@angular/material/dialog';

export function tokenGetter() {
    return localStorage.getItem("token");
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    EmployeePageComponent,
    ContractTypeComponent,
    CompanyComponent,
    OrganizationComponent,
    JobsComponent,
    PositionsComponent,
    EmployeeDepentsComponent,
    EmployeePhonesComponent,
    EditEmployeeComponent,
    EmployeeAddressComponent,
    EmployeeTabsComponent,
    EmployeeContractComponent,
    RegisterComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    TestComponent,
    EmployeeBankaccountComponent,
    EmployeeAssignmentinfoComponent,
    EmployeePayrolinfoComponent,
    EmployeeMedicalInsComponent,
    UserCompanyComponent,
    NotpermitedComponent
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
    TabViewModule,
    TabMenuModule,
    TableModule,
    InputTextModule,
    NgxAwesomePopupModule.forRoot(), 
    DialogConfigModule.forRoot(),
    ConfirmBoxConfigModule.forRoot(),
    ToastNotificationConfigModule.forRoot(),
    DropdownModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    // JwtModule.forRoot({
    //   config:{
    //     tokenGetter:tokenGetter,
    //     allowedDomains:[ConfigLoader.baseUrl.replace("https://","").replace("/","")],
    //     disallowedRoutes:[]
    //   }
    // }),
  ],
  providers: [
    ConfigsLoaderService,
    EmployeeService,
    CountryService,
    CityService,
    LocationService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      multi: true,
      deps: [ConfigsLoaderService],
    },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



export function appInitializerFactory(configsLoaderService: ConfigsLoaderService) {
    return () => configsLoaderService.loadConfigs();
}
