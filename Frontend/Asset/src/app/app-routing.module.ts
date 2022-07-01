import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractTypeComponent } from './modules/components/contract-type/contract-type.component';
import { EmployeePageComponent } from './modules/components/employee-page/employee-page.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { LoginComponent } from './modules/pages/login/login.component';
import { CompanyComponent } from './modules/components/Company/company/company.component';
import { OrganizationComponent } from './modules/components/organization/organization.component';
import { JobsComponent } from './modules/components/jobs/jobs.component';
import { PositionsComponent } from './modules/components/positions/positions.component';
import{EmployeeDepentsComponent} from './modules/components/employee-depents/employee-dependents.component'
import { EmployeePhonesComponent } from './modules/components/employee-phones/employee-phones.component';
import { EmployeeTabsComponent } from './modules/components/employee-tabs/employee-tabs.component';
import { RegisterComponent } from './modules/pages/register/register/register.component';
import { ForgetpasswordComponent } from './modules/pages/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './modules/pages/resetpassword/resetpassword.component';
import { TestComponent } from './modules/pages/test/test.component';
import { AuthGuard } from './guards/auth.guard';
import { UserCompanyComponent } from './modules/components/user-company/user-company.component';
import { NotpermitedComponent } from './modules/components/notpermited/notpermited.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'ResetPassword', component: ResetpasswordComponent },
  { path: 'Notpermited', component: NotpermitedComponent },
  { path: 'test', component: TestComponent ,canActivate:[AuthGuard] },
  {
    path: 'home', component: HomeComponent ,canActivate:[AuthGuard], children: [
      { path: 'employee', component: EmployeePageComponent },

      { path: 'employeeDependents/:id', component: EmployeeDepentsComponent },
      { path: 'employeeDetails/:id', component: EmployeeTabsComponent },

      { path: 'contractType', component: ContractTypeComponent },

      { path: 'company', component: UserCompanyComponent },
      { path: 'organizations', component: OrganizationComponent },
      { path: 'jobs', component: JobsComponent },
      { path: 'positions', component: PositionsComponent },
    ]
  }
  ,{ path: '**', redirectTo: 'home' }// { path: 'hr', loadChildren: () => import('../app/modules/hr/hr.module').then(m => m.HrModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
