import { InputBase } from "./input-base";

export class TextareaBase extends InputBase<string> {
  override controlType = 'textarea';
}