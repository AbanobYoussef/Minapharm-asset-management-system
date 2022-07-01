import { Component, OnInit } from '@angular/core';
import { DefaultData } from 'src/app/core/models/defaultData';
import { Job } from 'src/app/core/models/job';
import { Organization } from 'src/app/core/models/organization.model';
import { Position } from 'src/app/core/models/position';
import { DefaultDataService } from 'src/app/core/services/default-data.service';
import { JobService } from 'src/app/core/services/job.service';
import { MessagesServiceService } from 'src/app/core/services/messages-service.service';
import { OrganizationService } from 'src/app/core/services/organization.service';
import { PositionService } from 'src/app/core/services/position.service';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
@Component({
    selector: 'app-positions',
    templateUrl: './positions.component.html',
    styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
    positions: Position[]
    addPosition: Position = new Position()
    editPosition: Position = new Position()
    typeId = 3
    positionTypes: DefaultData[]
    defaultData: DefaultData = new DefaultData()
    editdefaultData: DefaultData = new DefaultData()
    jobs: Job[]
    job: Job = new Job()
    editjob: Job = new Job()
    orgs: Organization[]
    org: Organization = new Organization()
    editorg: Organization = new Organization()
    fileName = 'Positions';
    formData = new FormData();
    fileToUpload: any
    user: any
    constructor(private postionservice: PositionService, private defaultdataservice: DefaultDataService, private jobservice: JobService,
        public messagesServic: MessagesServiceService, private orgservice: OrganizationService) { }

    ngOnInit(): void {
        this.getAllDefaultDataByTypeId()
        this.getAllJobs()
        this.getAllPositions()
        this.getAllOrganizations()
    }
    getAllDefaultDataByTypeId() {
        this.user = JSON.parse(localStorage.getItem("userres"))
        this.defaultdataservice.getAllDefaultDataByTypeId(3, this.user.CompanyId).subscribe(res => {
            this.positionTypes = res
        })
    }
    getAllPositions() {
        this.postionservice.getPositionsByCompanyId(this.user.CompanyId).subscribe(res => {
            this.positions = res
        })
    }
    getAllJobs() {
        this.jobservice.getJobsByCompanyId(this.user.CompanyId).subscribe(res => {
            this.jobs = res
        })

    }
    getAllOrganizations() {
        this.orgservice.getAllOrganizations().subscribe(res => {
            this.orgs = res

        })
    }

    SavePosition(closeModal) {
        this.addPosition.companyId = this.user.CompanyId
        this.postionservice.addPosition(this.addPosition).subscribe(res => {
            this.getAllPositions()
            this.messagesServic.toastNotification("", "Data Added Successfully", true)
            closeModal.click()
        })
        this.addPosition.namePrimary = ''
        this.addPosition.nameSecondary = ''
        this.job = {
            createdBy: '', createdOn: null, id: 0,
            lastModifiedBy: '', lastModifiedOn: null, namePrimary: '', nameSecondary: '', companyId: 0
        }
        this.org = {
            cityId: '', cityName: '', companyId: ''
            , companyName: '', countryId: '', countryName: '', defaultDataId: '', defaultDataName: '', internalAddress: '',
            locationId: '', locationName: '', parentId: '', parentName: '',
            createdBy: '', createdOn: null, id: 0, lastModifiedBy: '', lastModifiedOn: null, namePrimary: '', nameSecondary: ''
        }
        this.defaultData = { id: 0, namePrimary: '', nameSecondary: '', type: 3, companyId: 0 }
    }
    EditPosition(position) {
        this.editPosition = position
        console.log(this.editPosition);
    }

    SaveEditPsition(closeModal) {
        this.postionservice.editPosition(this.editPosition).subscribe(res => {
            this.getAllPositions()
            this.messagesServic.toastNotification("", "Data Updated Successfully", true)
            closeModal.click()
        })
    }
    DeletePosition(position) {
        this.messagesServic.confirmDelete().subscribe(resp => {
            if (resp.success) {
                this.postionservice.deletePositionById(position.id).subscribe(res => {
                    this.messagesServic.toastNotification("", "Data Deleted Successfully", true)

                    this.getAllPositions()
                })
            }
            else {
                this.getAllPositions()
            }
        });

    }

    showSelectedAddOrganization(e) {
        this.addPosition.organizationId = e.target.value
        this.editPosition.organizationId = e.target.value
    }
    showSelectedAddJob(e) {
        this.addPosition.jobId = e.target.value
        this.editPosition.jobId = e.target.value
    }
    showSelectedAddPositionType(e) {
        this.addPosition.defaultDataId = e.target.value
        this.editPosition.defaultDataId = e.target.value
    }
    showSelectedAddPositionParent(e) {
        this.addPosition.parentId = e.target.value
        this.editPosition.parentId = e.target.value
    }
    exportExcel() {
        import("xlsx").then(xlsx => {
            const worksheet = xlsx.utils.json_to_sheet(this.positions);
            const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
            const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        });

    }
    saveAsExcelFile(buffer: any, fileName: string): void {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }

    exportexcel2(): void {
        let element = document.getElementById('excel-table');
        const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        let EXCEL_EXTENSION = '.xlsx';
        XLSX.writeFile(wb, this.fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);

    }
    handleFileInput(file) {
        this.fileToUpload = <File>file.target.files[0];
        this.formData = new FormData();
        this.formData.append('file', this.fileToUpload, this.fileToUpload.name);
    }
    importExcel(fileName, closeImport) {
        this.postionservice.importFIlePositions(this.formData).subscribe(res => {
            this.messagesServic.toastNotification("", "Data Added Successfully", true)
            closeImport.click()
        })
        fileName.value = ''
    }
}
