import { InputBase } from "./input-base";

export class DropdownBase extends InputBase<string> {
  override controlType = 'dropdown';
}