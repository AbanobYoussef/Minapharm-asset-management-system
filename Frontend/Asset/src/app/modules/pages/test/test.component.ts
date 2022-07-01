import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoints } from 'src/app/core/models/endpoints.model';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        console.log(localStorage.getItem("token"));
        console.log(endpoints.Company.GetAllCompanys.path);
        this.http.get("https://localhost:7140/api/GetAllCompanys").subscribe({
            next: (v) => {
                console.log(v["content"]);
            },
            error: (e) => console.error(e)
        });
    }



}
