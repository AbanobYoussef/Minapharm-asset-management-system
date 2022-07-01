import { DatePipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeMedicalIns } from 'src/app/core/models/employeeMedicalIns';
import { MedicalCompany } from 'src/app/core/models/MedicalCmpany';
import { PolicyInsurance } from 'src/app/core/models/PolicyIns';
import { EmployeeMedicalInsService } from 'src/app/core/services/employee-medical-ins.service';
import { MessagesServiceService } from 'src/app/core/services/messages-service.service';
import { PolicyInsuranceService } from 'src/app/core/services/policy-insurance.service';

@Component({
    selector: 'app-employee-medical-ins',
    templateUrl: './employee-medical-ins.component.html',
    styleUrls: ['./employee-medical-ins.component.css'],
    providers: [DatePipe],
})
export class EmployeeMedicalInsComponent implements OnInit {
    @Input() empId: string;
    medicalInfos: EmployeeMedicalIns[];
    addMedicalIns: EmployeeMedicalIns = new EmployeeMedicalIns();
    editMedicalIns: EmployeeMedicalIns = new EmployeeMedicalIns();
    medicalCompanies: MedicalCompany[];
    policyIns: PolicyInsurance = new PolicyInsurance()
    editPolicyIns: PolicyInsurance = new PolicyInsurance()

    constructor(
        private medicalservice: EmployeeMedicalInsService,
        private messagesServic: MessagesServiceService,
        private datePipe: DatePipe,
        private policyService: PolicyInsuranceService,
    ) { }

    ngOnInit(): void {
        this.getAllMedicalCompanyes();
        this.getEmployeeMedicalInsByEmpId();
    }
    getAllMedicalCompanyes() {
        this.medicalservice.getMedicalInsuranceCompany().subscribe((res) => {
            this.medicalCompanies = res;
        });
    }
    getEmployeeMedicalInsByEmpId() {
        this.medicalservice
            .getMedicalInsuranceByEmpId(this.empId)
            .subscribe((res) => {
                this.medicalInfos = res;
            });
    }

    showSelectedCompanyData(e) {
        console.log(e.target.value);
        this.policyService.getPolicyByInsuranceCompanyId(e.target.value).subscribe(res => {
            this.policyIns = res
            this.addMedicalIns.insurancepolicyId = res.id
            this.editMedicalIns.insurancepolicyId = res.id
            this.policyIns.startDate = this.datePipe.transform(new Date(this.policyIns.startDate), 'dd/MM/YYYY')
            this.policyIns.endDate = this.datePipe.transform(new Date(this.policyIns.endDate), 'dd/MM/YYYY')
            this.editPolicyIns.startDate = this.policyIns.startDate;
            this.editPolicyIns.endDate = this.policyIns.endDate;
        })
    }

    SaveMeicalIns(closeModal) {
        this.addMedicalIns.employeeId = this.empId;
        this.medicalservice.addMedicalInsurance(this.addMedicalIns).subscribe((res) => {
            this.getEmployeeMedicalInsByEmpId();
            this.messagesServic.toastNotification('', 'Data Added Successfully', true
            );
            closeModal.click()
        });
        console.log(this.addMedicalIns);

    }
    EditMedical(item) {
        this.editMedicalIns = item;
        console.log(this.editMedicalIns);
        this.policyService.GetInsurancePolicyByPolicyId(this.editMedicalIns.insurancepolicyId).subscribe(res => {
            this.editPolicyIns = res
            console.log("editPolicyIns", this.editPolicyIns);
            this.editPolicyIns.startDate = this.datePipe.transform(new Date(this.editPolicyIns.startDate), 'dd/MM/YYYY')
            this.editPolicyIns.endDate = this.datePipe.transform(new Date(this.editPolicyIns.endDate), 'dd/MM/YYYY')
        })
    }
    SaveEditMeicalIns(closeModal) {
        this.medicalservice
            .editMedicalInsurance(this.editMedicalIns)
            .subscribe((res) => {
                this.getEmployeeMedicalInsByEmpId();
                this.messagesServic.toastNotification(
                    '',
                    'Data Updated Successfully',
                    true
                );
                closeModal.click()
            });
    }
    DeleteMedical(item) {
        this.messagesServic.confirmDelete().subscribe((resp) => {
            if (resp.success) {
                this.medicalservice
                    .deleteMedicalInsuranceById(item.id)
                    .subscribe((res) => {
                        this.getEmployeeMedicalInsByEmpId();
                        this.messagesServic.toastNotification(
                            '',
                            'Data Deleted Successfully',
                            true
                        );
                    });
            } else {
                this.getEmployeeMedicalInsByEmpId();
            }
        });
    }
}
