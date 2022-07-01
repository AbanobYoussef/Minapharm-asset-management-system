import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/core/models/job';
import { JobService } from 'src/app/core/services/job.service';
import { MessagesServiceService } from 'src/app/core/services/messages-service.service';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Component({
    selector: 'app-jobs',
    templateUrl: './jobs.component.html',
    styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
    jobs: Job[];
    addjob: Job = new Job();
    editjob: Job = new Job();
    fileName = 'Jobs';
    formData = new FormData();
    fileToUpload: any;
    user: any

    constructor(
        private jobservice: JobService,
        public messagesServic: MessagesServiceService
    ) { }

    ngOnInit(): void {
        this.getAllJobs();
    }

    getAllJobs() {
        this.user = JSON.parse(localStorage.getItem("userres"))

        this.jobservice.getJobsByCompanyId(this.user.CompanyId).subscribe((res) => {
            this.jobs = res;
        });
    }

    saveJob(closeModal) {
        this.addjob.companyId = this.user.CompanyId
        this.jobservice.addJob(this.addjob).subscribe((res) => {
            this.getAllJobs();
            this.messagesServic.toastNotification(
                '',
                'Data Added Successfully',
                true
            );
            closeModal.click();
        });
        this.addjob.namePrimary = '';
        this.addjob.nameSecondary = '';
    }

    editJob(item) {
        this.editjob = item;
    }

    saveEditJob(closeModal) {
        this.jobservice.editJob(this.editjob).subscribe((res) => {
            this.getAllJobs();
            this.messagesServic.toastNotification(
                '',
                'Data Updated Successfully',
                true
            );
            closeModal.click()
        });
    }

    deleteJob(item) {
        this.messagesServic.confirmDelete().subscribe((resp) => {
            if (resp.success) {
                this.jobservice.deleteJobById(item.id).subscribe((res) => {
                    this.getAllJobs();
                    this.messagesServic.toastNotification(
                        '',
                        'Data Deleted Successfully',
                        true
                    );
                });
            } else {
                this.getAllJobs();
            }
        });
    }

    exportexcel2(): void {
        let element = document.getElementById('excel-table');
        const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        let EXCEL_EXTENSION = '.xlsx';
    }

    DeleteJob(item) {
        this.messagesServic.confirmDelete().subscribe(resp => {
            if (resp.success) {
                this.jobservice.deleteJobById(item.id).subscribe(res => {
                    this.getAllJobs()
                    this.messagesServic.toastNotification("", "Data Deleted Successfully", true)
                })
            }
            else {
                this.getAllJobs()
            }
        });
    }

    handleFileInput(file) {
        this.fileToUpload = <File>file.target.files[0];
        this.formData = new FormData();
        this.formData.append('file', this.fileToUpload, this.fileToUpload.name);
    }

    importExcel(fileName, closeEdit) {
        this.jobservice.importFileJob(this.formData).subscribe(res => {
            this.messagesServic.toastNotification("", "Data Added Successfully", true)
            this.getAllJobs()
            closeEdit.click()
        })
        fileName.value = ''
    }

}
