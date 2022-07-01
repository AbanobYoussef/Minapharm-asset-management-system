import { InputBase } from "./input-base";

export class TextboxBase extends InputBase<string> {
  override controlType = 'textbox';
}