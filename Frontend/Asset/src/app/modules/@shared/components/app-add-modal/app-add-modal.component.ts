import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Global } from 'src/app/modules/@core/global/global';

@Component({
    selector: 'app-app-add-modal',
    templateUrl: './app-add-modal.component.html',
    styleUrls: ['./app-add-modal.component.scss']
})
export class AppAddModalComponent implements OnInit {

    object$: any;
    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
        public global: Global,
        public dialogRef: MatDialogRef<AppAddModalComponent>) { }

    ngOnInit(): void {
        this.object$ = this.data;
    }

    getValue(event: any) {
        this.dialogRef.close(event);
    }
}
