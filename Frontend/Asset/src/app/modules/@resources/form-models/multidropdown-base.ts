import { InputBase } from "./input-base";

export class MultiDropdownBase extends InputBase<any[]> {
  override controlType = 'multidropdown';
}