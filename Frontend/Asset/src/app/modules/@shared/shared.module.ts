import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInputComponent } from './components/app-input/app-input.component';
import { AppFormComponent } from './components/app-form/app-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AppAddModalComponent } from './components/app-add-modal/app-add-modal.component';
import { AppEditModalComponent } from './components/app-edit-modal/app-edit-modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SmartTableComponent } from './components/smart-table/smart-table.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CoreModule } from '../@core/core.module';

@NgModule({
	declarations: [
		AppInputComponent,
		AppFormComponent,
		AppAddModalComponent,
		AppEditModalComponent,
		PaginationComponent,
		SmartTableComponent,
		ConfirmModalComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatDialogModule,
		FormsModule,
		NgSelectModule,
		CoreModule
	],
	exports: [
		AppInputComponent,
		AppFormComponent,
		MatDialogModule,
		FormsModule,
		AppAddModalComponent,
		AppEditModalComponent,
		PaginationComponent,
		SmartTableComponent,
		NgSelectModule
	]
})
export class SharedModule { }
