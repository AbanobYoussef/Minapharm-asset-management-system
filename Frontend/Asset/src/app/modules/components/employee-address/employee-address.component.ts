import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/core/models/city.model';
import { Country } from 'src/app/core/models/country.model';
import { Employee } from 'src/app/core/models/employee.model';
import { EmployeeAddress } from 'src/app/core/models/employeeAddress';
import { CityService } from 'src/app/core/services/city.service';
import { CountryService } from 'src/app/core/services/country.service';
import { DefaultDataService } from 'src/app/core/services/default-data.service';
import { EmployeeAddressesService } from 'src/app/core/services/employee-addresses.service';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { MessagesServiceService } from 'src/app/core/services/messages-service.service';
@Component({
    selector: 'app-employee-address',
    templateUrl: './employee-address.component.html',
    styleUrls: ['./employee-address.component.css'],
})
export class EmployeeAddressComponent implements OnInit {
    editEmployee: Employee = new Employee();
    employeeAdresses: EmployeeAddress[];
    addEemployeeAddress: EmployeeAddress = new EmployeeAddress();
    editEmployeeAddress: EmployeeAddress = new EmployeeAddress();
    countries: Country[];
    cities: City[];
    addressTypes: any[];
    genders: any[];
    martialStatus: any[];
    religions: any[];
    user: any
    @Input() empId: string;

    constructor(
        private emplyeeAddressservice: EmployeeAddressesService,
        private countryservice: CountryService,
        private cityservice: CityService,
        private defaultservice: DefaultDataService,
        public messagesServic: MessagesServiceService,
        private employeeservice: EmployeeService
    ) { }

    ngOnInit(): void {
        this.user = JSON.parse(localStorage.getItem("userres"))
        this.getAllEmployeeAdressesByEmployeeId();
        this.getAllCountries();
        this.getAllCities();
        this.getALlAdressTypes();
        this.getGenderData();
    }



    getALlAdressTypes() {
        let typeId = 4;

        this.defaultservice.getAllDefaultDataByTypeId(typeId, this.user.CompanyId).subscribe((res) => {
            this.addressTypes = res;
        });
    }

    getAllCountries() {
        this.countryservice.getAllCountries().subscribe((res) => {
            this.countries = res;
        });
    }

    getAllCities() {
        this.cityservice.getAllCities().subscribe((res) => {
            this.cities = res;
        });
    }

    getAllEmployeeAdressesByEmployeeId() {
        this.emplyeeAddressservice
            .getEmployeeAddressByEmpId(this.empId)
            .subscribe((res) => {
                this.employeeAdresses = res;
            });
    }

    getGenderData() {
        let typeId = 6;
        this.defaultservice.getAllDefaultDataByTypeId(typeId, this.user.CompanyId).subscribe((res) => {
            this.genders = res;
        });
    }

    showSelectedgender(e) {
        this.editEmployee.genderId = e.target.value;
    }

    DeleteEmployeeAdd(empAdd) {
        this.messagesServic.confirmDelete().subscribe((resp) => {
            if (resp.success) {
                this.emplyeeAddressservice
                    .deleteEmployeeAddressById(empAdd.id)
                    .subscribe((res) => {
                        this.getAllEmployeeAdressesByEmployeeId();
                        this.messagesServic.toastNotification(
                            '',
                            'Data Deleted Successfully',
                            true
                        );
                    });
            } else {
                this.getAllEmployeeAdressesByEmployeeId();
            }
        });
    }

    SaveEmployeeAdd(closeAddModal) {
        this.addEemployeeAddress.employeeId = this.empId;
        this.emplyeeAddressservice
            .addEmployeAddEmployeeAddresse(this.addEemployeeAddress)
            .subscribe((res) => {
                this.getAllEmployeeAdressesByEmployeeId();
                this.messagesServic.toastNotification(
                    '',
                    'Data Added Successfully',
                    true
                );
                closeAddModal.click();
            });
    }

    SaveEditEmployeeAdd(closeEditModal) {
        this.emplyeeAddressservice
            .editEmployeeAddress(this.editEmployeeAddress)
            .subscribe((res) => {
                this.messagesServic.toastNotification(
                    '',
                    'Data Updated Successfully',
                    true
                );
                this.getAllEmployeeAdressesByEmployeeId();
                closeEditModal.click();
            });
    }

    showSelectedValueCity(e) {
        this.addEemployeeAddress.cityId = e.target.value;
        this.editEmployeeAddress.cityId = e.target.value;
    }

    showSelectedValueCountry(e) {
        this.addEemployeeAddress.countryId = e.target.value;
        this.editEmployeeAddress.countryId = e.target.value;
    }

    showSelectedAdressType(e) {
        this.addEemployeeAddress.defaultDataId = e.target.value;
        this.editEmployeeAddress.defaultDataId = e.target.value;
    }

    EditEmployeeAddress(empAdd) {
        this.editEmployeeAddress = empAdd;
        console.log(empAdd, this.editEmployeeAddress);

    }

}
