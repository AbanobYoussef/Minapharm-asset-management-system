import { InputBase } from "./input-base";

export class UploadImageBase extends InputBase<string> {
  override controlType = 'uploadImage';
}