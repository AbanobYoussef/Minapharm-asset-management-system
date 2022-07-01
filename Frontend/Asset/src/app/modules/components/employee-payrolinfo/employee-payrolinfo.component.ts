import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeePayroll_Info } from 'src/app/core/models/EmployeePayroll_Info';
import { Job } from 'src/app/core/models/job';
import { Organization } from 'src/app/core/models/organization.model';
import { EmployeePayrollinfoService } from 'src/app/core/services/employee-payrollinfo.service';
import { EmployeeStatusService } from 'src/app/core/services/employee-status.service';
import { JobService } from 'src/app/core/services/job.service';
import { MessagesServiceService } from 'src/app/core/services/messages-service.service';
import { OrganizationService } from 'src/app/core/services/organization.service';
import { PositionService } from 'src/app/core/services/position.service';

@Component({
    selector: 'app-employee-payrolinfo',
    templateUrl: './employee-payrolinfo.component.html',
    styleUrls: ['./employee-payrolinfo.component.css']
})
export class EmployeePayrolinfoComponent implements OnInit {
    payRolls: EmployeePayroll_Info[]
    orgs: Organization[]
    jobs: Job[]
    positions: any[]
    addPayroll: EmployeePayroll_Info = new EmployeePayroll_Info()
    editPayroll: EmployeePayroll_Info = new EmployeePayroll_Info()
    status: any[]
    annuitiesValue: any
    HazardsValue: any
    @Input() empId: string;
    constructor(private payrollService: EmployeePayrollinfoService,
        private messagesServic: MessagesServiceService,
        private organizationService: OrganizationService,
        private jobService: JobService, private positionService: PositionService,
        private employeeStatusService: EmployeeStatusService) { }

    ngOnInit(): void {

        this.getAllPayrollsByEmpId()
        this.getAllOrganizationsByCompanyId()
        this.getAllJobsByCompanyId()
        this.getAllEmployeeStatusByCompanyId()
        this.getAllPositionByCompanyId()
    }
    getAllOrganizationsByCompanyId() {
        let user = JSON.parse(localStorage.getItem("userres"))
        this.organizationService.getAllOrganizationsByCompanyId(user.CompanyId).subscribe((res) => {
            this.orgs = res
        })
    }
    getAllJobsByCompanyId() {
        let user = JSON.parse(localStorage.getItem("userres"))
        this.jobService.getJobsByCompanyId(user.CompanyId).subscribe((res) => {
            this.jobs = res
        })
    }
    getAllPositionByCompanyId() {
        let user = JSON.parse(localStorage.getItem("userres"))
        this.positionService.getPositionsByCompanyId(user.CompanyId).subscribe(res => {
            this.positions = res
        })

    }
    getAllEmployeeStatusByCompanyId() {
        let user = JSON.parse(localStorage.getItem("userres"))
        this.employeeStatusService.getAllEmployeeStatusByCompanyId(user.CompanyId).subscribe(res => {
            this.status = res
        })

    }


    showSelectedOrganization(e) {
        this.addPayroll.organizationId = e.target.value
        this.editPayroll.organizationId = e.target.value

    }
    showSelectedJob(e) {
        this.addPayroll.jobId = e.target.value
        this.editPayroll.jobId = e.target.value

    }
    showSelectedPosition(e) {
        this.addPayroll.positionId = e.target.value
        this.editPayroll.positionId = e.target.value
    }

    getAllPayrollsByEmpId() {
        this.payrollService.getEmployeePayrollInfoByEmpId(this.empId).subscribe(res => {
            this.payRolls = res
        })
    }

    showSelectedAddAnnuities(e) {
        if (e.target.value == 0) {
            this.addPayroll.annuities = false

        }
        else {
            this.addPayroll.annuities = true
        }
    }
    showSelectedEditAnnuities(e) {
        if (e.target.value == 0) {
            this.editPayroll.annuities = false

        }
        else {
            this.editPayroll.annuities = true
        }
    }
    showSelectedAddHazards(e) {
        if (e.target.value == 0) {
            this.addPayroll.hazards = false

        }
        else {
            this.addPayroll.hazards = true
        }
    }
    showSelectedEditHazards(e) {
        if (e.target.value == 0) {
            this.editPayroll.hazards = false

        }
        else {
            this.editPayroll.hazards = true
        }
    }
    SavePayroll(closeAdd) {
        this.addPayroll.employeeId = this.empId
        this.payrollService.addEmployeePayrollInfo(this.addPayroll).subscribe(res => {
            this.getAllPayrollsByEmpId()
            this.messagesServic.toastNotification("", "Data Added Successfully", true)
            closeAdd.click()
        })
    }
    EditPayroll(item) {
        this.editPayroll = item
        if (this.editPayroll.annuities == true) {
            this.annuitiesValue = "Yes"

        }
        if (this.editPayroll.annuities == false) {
            this.annuitiesValue = "No"

        }
        if (this.editPayroll.hazards == true) {
            this.HazardsValue = "Yes"
        }
        if (this.editPayroll.hazards == false) {
            this.HazardsValue = "No"
        }
    }
    SaveEditPayroll(closeEdit) {
        this.payrollService.editEmployeePayrollInfo(this.editPayroll).subscribe(res => {
            this.getAllPayrollsByEmpId()
            this.messagesServic.toastNotification("", "Data Updated Successfully", true)
            closeEdit.click()
        })
    }
    DeletePayroll(item) {
        this.messagesServic.confirmDelete().subscribe(resp => {
            if (resp.success) {
                this.payrollService.deleteEmployeePayrollInfoById(item.id).subscribe(res => {
                    this.getAllPayrollsByEmpId()
                    this.messagesServic.toastNotification("", "Data Deleted Successfully", true)
                })
            }
            else {
                this.getAllPayrollsByEmpId()
            }
        });
    }

}
