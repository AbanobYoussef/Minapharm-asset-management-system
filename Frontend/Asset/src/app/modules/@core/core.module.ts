import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Global } from './global/global';


@NgModule({
	declarations: [],
	imports: [
		CommonModule
	],
	exports: [
		
	]
})
export class CoreModule {
	static forRoot(): ModuleWithProviders<any> {
		return {
			ngModule: CoreModule,
			providers: [
				Global
			]
		};
	}
	static forChild(): ModuleWithProviders<any> {
		return {
			ngModule: CoreModule,
			providers: [
				Global
			]
		};
	}
}
