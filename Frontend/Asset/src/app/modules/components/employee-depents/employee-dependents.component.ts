import { DatePipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { employeeDependents } from 'src/app/core/models/employeeDependents';
import { DefaultDataService } from 'src/app/core/services/default-data.service';
import { EmployeeDependentsService } from 'src/app/core/services/employee-dependents.service';
import { MessagesServiceService } from 'src/app/core/services/messages-service.service';

@Component({
    selector: 'app-employee-depents',
    templateUrl: './employee-depents.component.html',
    styleUrls: ['./employee-depents.component.css'],
    providers: [DatePipe],
})
export class EmployeeDepentsComponent implements OnInit {
    employeeDependents: employeeDependents[];
    addEmployeeDepen: employeeDependents = new employeeDependents();
    editEmployeeDepen: employeeDependents = new employeeDependents();
    relationNames: any[];
    genders: any[];
    medicalValue: string;
    ticketValue: string;
    schoolValue: string;
    @Input() empId: string;
    user: any

    constructor(
        private employeeservice: EmployeeDependentsService,
        private defaultservice: DefaultDataService,
        private datePipe: DatePipe,
        public messagesServic: MessagesServiceService
    ) { }

    ngOnInit(): void {
        this.user = JSON.parse(localStorage.getItem("userres"))

        this.getAllEmployeeAdressesByEmployeeId();
        this.getAllGenders();
        this.getALlRelationsName();
    }
    getAllEmployeeAdressesByEmployeeId() {
        this.employeeservice
            .getAllEmployeeDependentByEmpId(this.empId)
            .subscribe((res) => {
                this.employeeDependents = res;
            });
    }
    getALlRelationsName() {
        let typeId = 10;
        this.defaultservice.getAllDefaultDataByTypeId(typeId, this.user.CompanyId).subscribe((res) => {
            this.relationNames = res;
        });
    }
    getAllGenders() {
        let typeId = 6;
        this.defaultservice.getAllDefaultDataByTypeId(typeId, this.user.CompanyId).subscribe((res) => {
            this.genders = res;
        });
    }
    showSelectedRelationNAme(e) {
        this.addEmployeeDepen.relationshipId = e.target.value;
        this.editEmployeeDepen.relationshipId = e.target.value;
    }
    showSelectedGender(e) {
        this.addEmployeeDepen.genderId = e.target.value;
        this.editEmployeeDepen.genderId = e.target.value;
    }
    showSelectedeligibleforMedicalIn(e) {
        if (e.target.value == 0) {
            this.addEmployeeDepen.eligibleforMedicalIn = false;
            this.editEmployeeDepen.eligibleforMedicalIn = false;
        } else {
            this.addEmployeeDepen.eligibleforMedicalIn = true;
            this.editEmployeeDepen.eligibleforMedicalIn = true;
        }
    }
    showSelectedTickets(e) {
        if (e.target.value == 0) {
            this.addEmployeeDepen.eligibleforTickets = false;
            this.editEmployeeDepen.eligibleforTickets = false;
        } else {
            this.addEmployeeDepen.eligibleforTickets = true;
            this.editEmployeeDepen.eligibleforTickets = true;
        }
    }
    showSelectedeligibleforSchool(e) {
        if (e.target.value == 0) {
            this.addEmployeeDepen.eligibleforSchool = false;
            this.editEmployeeDepen.eligibleforSchool = false;
        } else {
            this.addEmployeeDepen.eligibleforSchool = true;
            this.editEmployeeDepen.eligibleforSchool = true;
        }
    }
    SaveEmployeeDepent(closeAddModal) {
        this.addEmployeeDepen.employeeId = this.empId;
        this.addEmployeeDepen.birthDate = this.datePipe.transform(
            this.addEmployeeDepen.birthDate,
            'yyyy-MM-dd'
        );
        this.addEmployeeDepen.relationshipStartDate = this.datePipe.transform(
            this.addEmployeeDepen.relationshipStartDate,
            'yyyy-MM-dd'
        );

        this.employeeservice
            .addEmployeeDependent(this.addEmployeeDepen)
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
    EditEmployeeDependents(item) {
        this.editEmployeeDepen = item;
        if (this.editEmployeeDepen.eligibleforMedicalIn == true) {
            this.medicalValue = 'Yes';
        }
        if (this.editEmployeeDepen.eligibleforMedicalIn == false) {
            this.medicalValue = 'No';
        }
        if (this.editEmployeeDepen.eligibleforTickets == true) {
            this.ticketValue = 'Yes';
        }
        if (this.editEmployeeDepen.eligibleforTickets == false) {
            this.ticketValue = 'No';
        }
        if (this.editEmployeeDepen.eligibleforSchool == true) {
            this.schoolValue = 'Yes';
        }
        if (this.editEmployeeDepen.eligibleforSchool == false) {
            this.schoolValue = 'No';
        }
    }
    SaveEditEmployeeDenpdent(closeEdit) {
        this.employeeservice
            .editEmployeeDependent(this.editEmployeeDepen)
            .subscribe((res) => {
                this.getAllEmployeeAdressesByEmployeeId();
                this.messagesServic.toastNotification(
                    '',
                    'Data Updated Successfully',
                    true
                );
                closeEdit.click();
            });
    }
    DeleteEmployeeDependents(item) {
        this.messagesServic.confirmDelete().subscribe((resp) => {
            if (resp.success) {
                this.employeeservice
                    .deleteEmployeeDependentById(item.id)
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
}
