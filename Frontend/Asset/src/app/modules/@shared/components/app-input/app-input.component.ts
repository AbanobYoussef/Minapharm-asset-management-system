import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
// import * as intlTelInput from 'intl-tel-input';

@Component({
  selector: 'app-app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss'],
})
export class AppInputComponent implements OnInit , AfterViewInit {
  @Input() input!: any;
  @Input() form!: FormGroup;
  @Output() changed:EventEmitter<any> = new EventEmitter<any>();
  iti:any;
  get isValid() {
    return this.form.controls[this.input.key].valid;
  }

  get isTouched() {
    return this.form.controls[this.input.key].touched;
  }

  get isDirty() {
    return this.form.controls[this.input.key].dirty;
  }

  get control() {
    return this.form.controls[this.input.key];
  }

  constructor() {}

  ngOnInit(): void {
  
  }
  
  ngAfterViewInit(): void {
    // const input = document.querySelector("#phone");
    // if(input != null){
    //   this.iti =intlTelInput(input as Element, {
    //     initialCountry: "sa",   
    //     preferredCountries:["sa", "eg"],
    //     separateDialCode:true 
    //   });
    // }
  }

  onFileChanged(event: any) {
    console.log('event', event.target.files[0]);
  }

  select(event:any){
    if(this.input.change.length > 0){
      this.changed.emit({
        key:this.input.key,
        changeKey:this.input.change,
        val:event.target.value
      })
    }
  }

}
