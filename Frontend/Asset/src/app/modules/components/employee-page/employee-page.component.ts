import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DefaultData } from 'src/app/core/models/defaultData';
import { Employee } from 'src/app/core/models/employee.model';
import { Register } from 'src/app/core/models/register.model';
import { CityService } from 'src/app/core/services/city.service';
import { CountryService } from 'src/app/core/services/country.service';
import { DefaultDataService } from 'src/app/core/services/default-data.service';
import { EmployeeStatusService } from 'src/app/core/services/employee-status.service';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { MessagesServiceService } from 'src/app/core/services/messages-service.service';
import { AuthService } from 'src/app/core/services/auth.service';
import jwt_decode from 'jwt-decode';

@Component({
    selector: 'app-employee-page',
    templateUrl: './employee-page.component.html',
    styleUrls: ['./employee-page.component.css'],
    providers: [DatePipe]
})
export class EmployeePageComponent implements OnInit {

    constructor(public employeeService: EmployeeService, private defaultservice: DefaultDataService,
        private cityservice: CityService, private countryservice: CountryService,
        public messagesServic: MessagesServiceService, private datePipe: DatePipe,
        private employeeStatusService:EmployeeStatusService,
        private _authService: AuthService,) { }
    employees: Employee[]
    addEmployee: Employee = new Employee();
    editEmployee: Employee = new Employee();
    displayModaladdEmployee: boolean
    displayModalEditEmployee: boolean
    genders: DefaultData[]
    gendertype: DefaultData
    martialStatus: any[]
    mStatus: any
    religions: any[]
    religion: any
    cities: any[]
    city: any
    countries: any[]
    country: any
    user: any
    status:any[]
    empRegister:Register= new Register();
    ngOnInit(): void {
        this.user = JSON.parse(localStorage.getItem("userres"))
        this.getGenderData();
        this.getMartialStatus();
        this.getReligion()
        this.getAllCities()
        this.getAllCountries()
        this.getAllEmployeeStatusByCompanyId()
        this.getAllEmployees()
    }
    // showaddEmployee() {
    //     this.displayModaladdEmployee = true
    // }
    getAllEmployeeStatusByCompanyId(){
        this.employeeStatusService.getAllEmployeeStatusByCompanyId(this.user.CompanyId).subscribe(res=>{
            this.status=res
        })

    }
    getAllEmployees() {
        this.employeeService.getAllEmployeesByCompanyId(this.user.CompanyId).subscribe(res => {
            this.employees = res
        })
    }
    getGenderData() {
        let typeId = 6
        this.defaultservice.getAllDefaultDataByTypeId(typeId, this.user.CompanyId).subscribe(res => {
            this.genders = res
        })
    }
    getMartialStatus() {
        let typeId = 7
        this.defaultservice.getAllDefaultDataByTypeId(typeId, this.user.CompanyId).subscribe(res => {
            this.martialStatus = res
        })
    }
    getReligion() {
        let typeId = 8
        this.defaultservice.getAllDefaultDataByTypeId(typeId, this.user.CompanyId).subscribe(res => {
            this.religions = res
        })
    }
    getAllCities() {
        this.cityservice.getAllCities().subscribe(res => {
            this.cities = res
        })
    }
    showSelectedStatus(e){
        this.addEmployee.employeeStatusId=e.target.value
    }
    getAllCountries() {
        this.countryservice.getAllCountries().subscribe(res => {
            this.countries = res
        })
    }
    SaveEmployee(closeAdd) {
        this.addEmployee.cityId = this.city.id
        this.addEmployee.genderId = this.gendertype.id
        this.addEmployee.countryId = this.country.id
        this.addEmployee.martialStatusId = this.mStatus.id
        this.addEmployee.religionId = this.religion.id
        

        this.empRegister.userName=this.addEmployee.email;
        this.empRegister.email=this.addEmployee.email;
        this.empRegister.roleName="employee";
        this.empRegister.companyName="null"

console.log(this.empRegister)

        this._authService.register(this.empRegister).subscribe((userres) => {
            console.log(userres['id']);
            this.addEmployee.appUserId= userres['id'];
            this.addEmployee.companyId= jwt_decode(localStorage.getItem('token'))['CompanyId'];

            console.log(this.addEmployee)
           
            if (userres == 'Email is already registered!') {
                this.messagesServic.toastNotification(
                    '',
                    'Email is already registered!',
                    false
                );
            } else if (userres == 'Username is already registered!') {
                this.messagesServic.toastNotification(
                    '',
                    'Username is already registered!',
                    false
                );
            } else {
                this.messagesServic.toastNotification(
                    '',
                    'E-mail Confirmation Send Successfully',
                    true
                );

                this.employeeService.addEmployee(this.addEmployee).subscribe(res => {

                    this.getAllEmployees()
                    this.messagesServic.toastNotification("", "Data Added Successfully", true)
                    closeAdd.click()
                })
            }
        });




      
        this.displayModaladdEmployee = false
    }
    EditEmployee(employee) {
        this.editEmployee = employee
        this.displayModalEditEmployee = true
    }


    DeleteEmployee(employee) {
        this.messagesServic.confirmDelete().subscribe(resp => {
            if (resp.success) {
                this.employeeService.deleteEmployeeById(employee.id).subscribe(res => {
                    this.getAllEmployees()
                    this.messagesServic.toastNotification("", "Data Deleted Successfully", true)
                })
            }
            else {
                this.getAllEmployees()
            }
        });

    }
}
