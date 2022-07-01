import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/core/models/employee.model';
import { CityService } from 'src/app/core/services/city.service';
import { CountryService } from 'src/app/core/services/country.service';
import { DefaultDataService } from 'src/app/core/services/default-data.service';
import { EmployeeStatusService } from 'src/app/core/services/employee-status.service';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { MessagesServiceService } from 'src/app/core/services/messages-service.service';

@Component({
    selector: 'app-edit-employee',
    templateUrl: './edit-employee.component.html',
    styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
    editEmployee: Employee = new Employee();
    cities: any[];
    countries: any[];
    martialStatus: any[];
    religions: any[];
    status: any[]
    @Input() empId: string;

    constructor(
        private cityservice: CityService,
        private countryservice: CountryService,
        private defaultservice: DefaultDataService,
        private employeeservice: EmployeeService,
        public messagesServic: MessagesServiceService,
        private router: Router,
        private employeeStatusService: EmployeeStatusService
    ) { }

    ngOnInit(): void {
        this.getEmployeeDataById();
        this.getAllCities();
        this.getAllCountries();
        this.getReligion();
        this.getMartialStatus();
        this.getAllEmployeeStatusByCompanyId()
    }
    getAllmloyees() {
        this.employeeservice.getAllEmployees().subscribe(res => {

        })
    }
    getAllEmployeeStatusByCompanyId() {
        let user = JSON.parse(localStorage.getItem("userres"))
        this.employeeStatusService.getAllEmployeeStatusByCompanyId(user.CompanyId).subscribe(res => {
            this.status = res
        })

    }

    getEmployeeDataById() {
        this.employeeservice.getEmployeeById(this.empId).subscribe((res) => {
            this.editEmployee = res;
            console.log(this.editEmployee);
            this.parsingEmployeeData();
        });
    }

    parsingEmployeeData() {
        this.editEmployee.birthDate = new Date(this.editEmployee.birthDate)
        this.editEmployee.hireDate = new Date(this.editEmployee.hireDate)
    }

    showSelectedTownOfBirth(e) {
        this.editEmployee.cityId = e.target.value;
    }

    showSelectedCountryOfBirth(e) {
        this.editEmployee.countryId = e.target.value;
    }

    getAllCities() {
        this.cityservice.getAllCities().subscribe((res) => {
            this.cities = res;
        });
    }

    getAllCountries() {
        this.countryservice.getAllCountries().subscribe((res) => {
            this.countries = res;
        });
    }

    showSelectedmartialStatus(e) {
        this.editEmployee.martialStatusId = e.target.value;
    }

    getMartialStatus() {
        let typeId = 7;
        let user = JSON.parse(localStorage.getItem("userres"))

        this.defaultservice.getAllDefaultDataByTypeId(typeId, user.CompanyId).subscribe((res) => {
            this.martialStatus = res;
        });
    }

    showSelectedreligion(e) {
        this.editEmployee.religionId = e.target.value;
    }

    getReligion() {
        let user = JSON.parse(localStorage.getItem("userres"))

        let typeId = 8;
        this.defaultservice.getAllDefaultDataByTypeId(typeId, user.CompanyId).subscribe((res) => {
            this.religions = res;
        });
    }

    SaveEditEmployee() {
        this.employeeservice.editEmployee(this.editEmployee).subscribe((res) => {
            this.messagesServic.toastNotification(
                '',
                'Data Updated Successfully',
                true
            );
        });
        
        this.router.navigate(['/home/employee']);
    }
    showSelectedStatus(e) {
        this.editEmployee.employeeStatusId = e.target.value
    }

}
