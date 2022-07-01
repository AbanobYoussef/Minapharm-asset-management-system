import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-employee-tabs',
    templateUrl: './employee-tabs.component.html',
    styleUrls: ['./employee-tabs.component.css']
})
export class EmployeeTabsComponent implements OnInit {

    constructor(private _Activatedroute: ActivatedRoute) { }
    empId: any

    ngOnInit(): void {
        this.empId = this._Activatedroute.snapshot.paramMap.get("id");
    }
}
