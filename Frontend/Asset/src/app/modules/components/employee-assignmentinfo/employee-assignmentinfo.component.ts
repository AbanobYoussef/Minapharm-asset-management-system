import { DatePipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeAssignmentInfo } from 'src/app/core/models/EmployeeAssignmentInfo';
import { EmployeeAssignmentinfoService } from 'src/app/core/services/employee-assignmentinfo.service';
import { MessagesServiceService } from 'src/app/core/services/messages-service.service';

@Component({
    selector: 'app-employee-assignmentinfo',
    templateUrl: './employee-assignmentinfo.component.html',
    styleUrls: ['./employee-assignmentinfo.component.css'],
    providers: [DatePipe]
})
export class EmployeeAssignmentinfoComponent implements OnInit {
    displayAddAssigmInfo: boolean
    displayEditAssigmInfo: boolean
    assignInfos: EmployeeAssignmentInfo[]
    addAssignment: EmployeeAssignmentInfo = new EmployeeAssignmentInfo()
    editAssignment: EmployeeAssignmentInfo = new EmployeeAssignmentInfo()
    HazardsValue: any
    @Input() empId: string;
    constructor(private assignService: EmployeeAssignmentinfoService, public messagesServic: MessagesServiceService,
        private datePipe: DatePipe,) { }

    ngOnInit(): void {
        this.getEmployeeAssignmentInfoByEmpId()
    }
    showaddAssignInfo() {
        this.displayAddAssigmInfo = true
    }
    getEmployeeAssignmentInfoByEmpId() {
        this.assignService.getEmployeeAssignmentInfoByEmpId(this.empId).subscribe(res => {
            this.assignInfos = res
        })

    }
    SaveAssignment() {
        this.addAssignment.employeeId = this.empId
        this.addAssignment.hazardsJoinDate = this.datePipe.transform(this.addAssignment.hazardsJoinDate, 'yyyy-MM-dd')
        this.assignService.addEmployeeAssignmentInfo(this.addAssignment).subscribe(res => {
            this.getEmployeeAssignmentInfoByEmpId()
            this.messagesServic.toastNotification("", "Data Deleted Successfully", true)

        })
        this.displayAddAssigmInfo = false
    }
    EditAssignment(item) {
        this.editAssignment = item
        this.displayEditAssigmInfo = true
        if (this.editAssignment.hazards == true) {
            this.HazardsValue = "Yes"
        }
        if (this.editAssignment.hazards == false) {
            this.HazardsValue = "No"
        }

    }
    SaveEditAssignment() {
        this.assignService.editEmployeeAssignmentInfo(this.editAssignment).subscribe(res => {
            this.getEmployeeAssignmentInfoByEmpId()
            this.messagesServic.toastNotification("", "Data Deleted Successfully", true)
        })
        this.displayEditAssigmInfo = false

    }
    DeleteAssignment(item) {
        this.messagesServic.confirmDelete().subscribe(resp => {
            if (resp.success) {
                this.assignService.deleteEmployeeAssignmentInfoById(item.id).subscribe(res => {
                    this.getEmployeeAssignmentInfoByEmpId()
                    this.messagesServic.toastNotification("", "Data Deleted Successfully", true)

                })
            }
            else {
                this.getEmployeeAssignmentInfoByEmpId()
            }
        });
    }

    showSelectedAdd(e) {
        if (e.target.value == 0) {
            this.addAssignment.hazards = false

        }
        else {
            this.addAssignment.hazards = true
        }
    }
    showSelectedEdit(e) {
        if (e.target.value == 0) {
            this.editAssignment.hazards = false

        }
        else {
            this.editAssignment.hazards = true
        }
    }

}
