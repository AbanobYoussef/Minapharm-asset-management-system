import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputBase } from '../../form-models/input-base';

@Injectable({
	providedIn: 'root'
})
export class FormControlService {

	constructor() { }

	toFormGroup(inputs: InputBase<string>[]) {
		const group: any = {};
		inputs.forEach(input => {
			group[input.key] =
				input.disabled ? new FormControl({ value: input.value, disabled: true }) :
					input.required ? new FormControl(input.value || '', input.validators?.length > 0 ? [...input.validators, Validators.required] : [Validators.required]) :
						new FormControl(input.value || '', input.validators?.length > 0 ? Validators.compose([...input.validators]) : []);
			group[input.key].updateValueAndValidity();
		});
		return new FormGroup(group);
	}
}
