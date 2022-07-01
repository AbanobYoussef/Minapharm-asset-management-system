import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from 'src/app/modules/@resources/form-models/input-base';
import { FormControlService } from 'src/app/modules/@resources/services/form-control/form-control.service';

InputBase
@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.scss'],
})
export class AppFormComponent implements OnInit {
  @Input() inputs: InputBase<string>[] | null = [];
  @Input() formType: string = 'grid';
  @Input() button: string = 'Save';
  @Input() buttonWidth: string = '150';
  @Output() value: EventEmitter<any> = new EventEmitter<any>();
  form!: FormGroup;
  payLoad = '';

  constructor(
    private formControlService: FormControlService,
  ) {}

  ngOnInit() {
    this.form = this.formControlService.toFormGroup(
      this.inputs as InputBase<string>[]
    );
  }

  selectValue(event: any) {
    if (event.changeKey == 'itemId') this.getItems(event);
    if (event.changeKey == 'attributeId') this.getAttributes(event);
  }

  getItems(event: any) {
    console.log('getItemsevent', event);
    // this.productService
    //   .getItemByCategoryId(event?.val)
    //   .subscribe((res: any) => {
    //     let items: any = [];
    //     res.forEach((it: any) => {
    //       items.push({ key: it.id, value: it?.label });
    //     });
    //     this.inputs?.forEach((el) => {
    //       if (el.key == event.changeKey) el.options = items;
    //       if (el.key == event.key) el.value = event.val;
    //     });
    //     this.form = this.formControlService.toFormGroup(
    //       this.inputs as InputBase<string>[]
    //     );
    //   });
  }
  getAttributes(event: any) {
    console.log('getAttributesevent', event);
    // this.attributeService.getAttributeByItemId(event?.val).subscribe((res: any) => {
    //   let attributes: any = [];
    //   res.forEach((attr: any) => {
    //     attributes.push({ key: attr.id, value: attr.label });
    //   });
    //   this.inputs?.forEach((el) => {
    //     if (el.key == event.changeKey) el.options = attributes;
    //     if (el.key == event.key) el.value = event.val;
    //   });
    //   this.form = this.formControlService.toFormGroup(
    //     this.inputs as InputBase<string>[]
    //   );
    // });
  }
  onSubmit() {
    this.value.emit(this.form.getRawValue());
  }
}
