import {
    Component,
    Input,
    OnInit,
    ViewChild,
    ElementRef,
    Pipe,
    PipeTransform,
} from '@angular/core';
import { EmployeePhones } from 'src/app/core/models/employeePhones';
import { DefaultDataService } from 'src/app/core/services/default-data.service';
import { EmployeePhonesService } from 'src/app/core/services/employee-phones.service';
import { MessagesServiceService } from 'src/app/core/services/messages-service.service';
@Component({
    selector: 'app-employee-phones',
    templateUrl: './employee-phones.component.html',
    styleUrls: ['./employee-phones.component.css'],
})
export class EmployeePhonesComponent implements OnInit {
    employeePhones: EmployeePhones[];
    addEmployeePhone: EmployeePhones = new EmployeePhones();
    editEmployeePhone: EmployeePhones = new EmployeePhones();
    phonesTypes: any[];
    constructor(
        private defaultservice: DefaultDataService,
        private employeePhoneservice: EmployeePhonesService,
        public messagesServic: MessagesServiceService
    ) { }
    @Input() empId: string;
    ngOnInit(): void {
        this.getPhonesNumbersByEmpId();
        this.getAllPhoneTypes();
    }
    getPhonesNumbersByEmpId() {
        this.employeePhoneservice
            .getEmployeePhoneByEmpId(this.empId)
            .subscribe((res) => {
                this.employeePhones = res;
            });
    }
    getAllPhoneTypes() {
        let typeId = 5;
        let user = JSON.parse(localStorage.getItem("userres"))

        this.defaultservice.getAllDefaultDataByTypeId(typeId, user.CompanyId).subscribe((res) => {
            this.phonesTypes = res;
        });
    }

    showSelectedPhoneType(e) {
        this.addEmployeePhone.phoneTypeId = e.target.value;
        this.editEmployeePhone.phoneTypeId = e.target.value;
    }
    SaveEmployeePhone(closeAddModal) {
        this.addEmployeePhone.employeeId = this.empId;
        this.employeePhoneservice
            .addEmployeePhone(this.addEmployeePhone)
            .subscribe((res) => {
                this.getPhonesNumbersByEmpId();
                this.messagesServic.toastNotification(
                    '',
                    'Data Added Successfully',
                    true
                );
                closeAddModal.click()
            });
    }
    EditEmployeePhone(phone) {
        this.editEmployeePhone = phone;
    }
    SaveEditEmployeePhone(closeEditModal) {
        this.employeePhoneservice
            .editEmployeePhone(this.editEmployeePhone)
            .subscribe((res) => {
                this.getPhonesNumbersByEmpId();
                this.messagesServic.toastNotification(
                    '',
                    'Data Updated Successfully',
                    true
                );
                closeEditModal.click()
            });
    }
    DeleteEmployeePhone(phone) {
        this.messagesServic.confirmDelete().subscribe((resp) => {
            if (resp.success) {
                this.employeePhoneservice
                    .deleteEmployeePhoneById(phone.id)
                    .subscribe((res) => {
                        this.getPhonesNumbersByEmpId();
                        this.messagesServic.toastNotification(
                            '',
                            'Data Deleted Successfully',
                            true
                        );
                    });
            } else {
                this.getPhonesNumbersByEmpId();
            }
        });
    }
}
