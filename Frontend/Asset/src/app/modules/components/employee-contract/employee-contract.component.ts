import { DatePipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeCotract } from 'src/app/core/models/employeeCotract';
import { DefaultDataService } from 'src/app/core/services/default-data.service';
import { EmployeeContractService } from 'src/app/core/services/employee-contract.service';
import { MessagesServiceService } from 'src/app/core/services/messages-service.service';

@Component({
  selector: 'app-employee-contract',
  templateUrl: './employee-contract.component.html',
  styleUrls: ['./employee-contract.component.css'],
  providers: [DatePipe]

})
export class EmployeeContractComponent implements OnInit {
  employeeContracts: EmployeeCotract[]
  addemployeeContract: EmployeeCotract = new EmployeeCotract()
  showEmployeeContract: EmployeeCotract = new EmployeeCotract()
  contractTypes: any[]
  status: any[]
  methode: any[]
  tickets: any[]
  vacations: any[]
  user: any
  constructor(private defaultservice: DefaultDataService, private datePipe: DatePipe,
    private employeecontractService: EmployeeContractService, public messagesServic: MessagesServiceService,) { }
  @Input() empId: string;

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("userres"))

    this.GetAllContractType()
    this.GetAllStatus()
    this.GetAllMethods()
    this.GetAllEmployeeContractsByEmployeeId()
    this.GetnnualVacations()
    this.GetAllTcketsClass()
  }
  GetAllEmployeeContractsByEmployeeId() {
    this.employeecontractService.getEmployeeContractByEmpId(this.empId).subscribe(res => {
      this.employeeContracts = res
      this.employeeContracts.reverse()
    })
  }
  GetAllContractType() {
    let typeId = 1
    this.defaultservice.getAllDefaultDataByTypeId(typeId, this.user.CompanyId).subscribe(res => {
      this.contractTypes = res
    })
  }
  GetAllStatus() {
    let typeId = 11
    this.defaultservice.getAllDefaultDataByTypeId(typeId, this.user.CompanyId).subscribe(res => {
      this.status = res
    })
  }
  GetAllMethods() {
    let typeId = 12
    this.defaultservice.getAllDefaultDataByTypeId(typeId, this.user.CompanyId).subscribe(res => {
      this.methode = res
    })
  }

  GetAllTcketsClass() {
    let typeId = 14
    this.defaultservice.getAllDefaultDataByTypeId(typeId, this.user.CompanyId).subscribe(res => {
      this.tickets = res
    })
  }
  GetnnualVacations() {
    let typeId = 13
    this.defaultservice.getAllDefaultDataByTypeId(typeId, this.user.CompanyId).subscribe(res => {
      this.vacations = res
    })
  }

  showSelectedEmpContract(e) {
    this.addemployeeContract.contractTypeId = e.target.value
  }
  showSelectedEmpStatus(e) {
    this.addemployeeContract.employmentStatusId = e.target.value
  }
  showSelectedEmpMethods(e) {
    this.addemployeeContract.methodofContractingId = e.target.value
  }
  showSelectedTicketClass(e) {
    this.addemployeeContract.ticketClassId = e.target.value
  }
  showSelectedAnnual(e) {
    this.addemployeeContract.annualVacationDaysId = e.target.value
  }
  SaveEmployeeContract(closeAdd) {
    this.addemployeeContract.employeeId = this.empId
    //this.addemployeeContract.contractStartDate = this.datePipe.transform(this.addemployeeContract.contractStartDate, 'yyyy-MM-dd')
    // this.addemployeeContract.experimentEndDate = this.datePipe.transform(this.addemployeeContract.experimentEndDate, 'yyyy-MM-dd')
    this.employeecontractService.addEmployeeContract(this.addemployeeContract).subscribe(res => {
      this.GetAllEmployeeContractsByEmployeeId()
      this.messagesServic.toastNotification("", "Data Added Successfully", true)
      closeAdd.click();
    })
  }
  EditEmployeeContract(type) {

  }
  DeleteEmployeeDContract(type) {
    this.messagesServic.confirmDelete().subscribe(resp => {
      if (resp.success) {
        this.employeecontractService.deleteEmployeeContractById(type.id).subscribe(res => {
          this.GetAllEmployeeContractsByEmployeeId()
          this.messagesServic.toastNotification("", "Data Deleted Successfully", true)
        })
      }
      else {
        this.GetAllEmployeeContractsByEmployeeId()
      }
    });
  }
  viewContract(item) {
    this.showEmployeeContract = item
  }
  deActivateContract(item) {
    this.messagesServic.confirmDeActivate().subscribe(resp => {
      if (resp.success) {
        item.isActivate = false
        this.employeecontractService.editEmployeeContract(item).subscribe(res => {
          this.GetAllEmployeeContractsByEmployeeId()
          this.messagesServic.toastNotification("", "Contract DeActivated", true)
        })
      }
      else {
        this.GetAllEmployeeContractsByEmployeeId()
      }
    });
  }
}
