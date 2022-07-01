import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Global } from 'src/app/modules/@core/global/global';

@Component({
  selector: 'app-app-edit-modal',
  templateUrl: './app-edit-modal.component.html',
  styleUrls: ['./app-edit-modal.component.scss']
})
export class AppEditModalComponent implements OnInit {
  object$: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public global: Global,
    public dialogRef: MatDialogRef<AppEditModalComponent>) { }

  ngOnInit(): void {
    this.object$ = this.data;
  }

  getValue(event: any) {
    this.dialogRef.close(event);
  }
}
