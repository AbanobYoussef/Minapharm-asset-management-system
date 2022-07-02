import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceAssetComponent } from './modules/components/device-asset/device-asset.component';
import { EmployeeComponent } from './modules/components/employee/employee.component';
import { TranspoetAssetComponent } from './modules/components/transpoet-asset/transpoet-asset.component';

const routes: Routes = [
 // { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '', component: EmployeeComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'transportAsset', component: TranspoetAssetComponent },
  { path: 'deviceAsset', component: DeviceAssetComponent },
 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
