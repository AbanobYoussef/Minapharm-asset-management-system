// import { Component, OnInit } from '@angular/core';
// import { Company } from 'src/app/core/models/company';
// import { CompanyService } from 'src/app/core/services/company.service';
// import { MessagesServiceService } from 'src/app/core/services/messages-service.service';
// import * as XLSX from 'xlsx';
// import jwt_decode from 'jwt-decode';

// @Component({
//     selector: 'app-company',
//     templateUrl: './company.component.html',
//     styleUrls: ['./company.component.css'],
// })
// export class CompanyComponent implements OnInit {
//     companies: Company[];
//     addCompany: Company = new Company();
//     editCompany: Company = new Company();
//     displayModalAddCompany: boolean;
//     displayModalEidtCompany: boolean;
//     FileSelected: File = null;
//     role: string;
//     token: any;

//     constructor(
//         public _companyService: CompanyService,
//         public _messagesServic: MessagesServiceService
//     ) { }

//     ngOnInit(): void {
//         this.token = jwt_decode(localStorage.getItem('token'));
//         console.log(this.token['uid']);
//         if (this.token['roles'] == 'company') {
//             this._companyService
//                 .GetCompanyByUserID(this.token['uid'])
//                 .subscribe((res) => {
//                     this.companies = res;
//                 });
//         } else {
//             this.getAllCompanys();
//         }
//     }

//     getAllCompanys() {
//         console.log(localStorage.getItem('token'));
//         this._companyService.getAllCompanys().subscribe((res: Company[]) => {
//             this.companies = res;
//             console.log(this.companies);
//         });
//     }

//     showAddCompany() {
//         this.displayModalAddCompany = true;
//     }

//     showEditCompany(obj: Company) {
//         this.displayModalEidtCompany = true;
//         this.editCompany = obj;
//         console.log(obj);
//     }

//     saveCompany() {
//         this.addCompany.createdBy = jwt_decode(localStorage.getItem('token'))[
//             'sub'
//         ];

//         this.addCompany.appUserId = jwt_decode(localStorage.getItem('token'))[
//             'uid'
//         ];
//         this._companyService.AddCompany(this.addCompany).subscribe((res) => {
//             this._messagesServic.toastNotification(
//                 '',
//                 'Data Added Successfully',
//                 true
//             );
//             this.getAllCompanys();
//         });
//         this.displayModalAddCompany = false;
//         this.addCompany.namePrimary = '';
//         this.addCompany.namesecondary = '';
//         this.addCompany.email = '';
//         this.addCompany.phone = '';
//         this.addCompany.logoUrl = '';
//         this.addCompany.description = '';
//         this.addCompany.phone2 = '';
//     }

//     EidtCompany() {
//         this.editCompany.lastModifiedBy = jwt_decode(localStorage.getItem('token'))[
//             'sub'
//         ];
//         this._companyService.EditCompany(this.editCompany).subscribe((res) => {
//             this._messagesServic.toastNotification(
//                 '',
//                 'Data Edited Successfully',
//                 true
//             );

//             this.getAllCompanys();
//         });
//         this.displayModalEidtCompany = false;
//         this.editCompany.namePrimary = '';
//         this.editCompany.namesecondary = '';
//         this.editCompany.email = '';
//         this.editCompany.phone = '';
//         this.editCompany.logoUrl = '';
//         this.editCompany.description = '';
//         this.editCompany.phone2 = '';
//     }

//     deleteCompany(item) {
//         this._messagesServic.confirmDelete().subscribe((resp) => {
//             if (resp.success) {
//                 this._companyService.DeleteCompany(item.id).subscribe((res) => {
//                     this._messagesServic.toastNotification(
//                         '',
//                         'Data Deleted Successfully',
//                         true
//                     );
//                     this.getAllCompanys();
//                 });
//             } else {
//                 this.getAllCompanys();
//             }
//         });
//     }

//     exportexcel(): void {
//         /* pass here the table id */
//         let element = document.getElementById('excel-table');
//         const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

//         /* generate workbook and add the worksheet */
//         const wb: XLSX.WorkBook = XLSX.utils.book_new();
//         XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

//         /* save to file */
//         XLSX.writeFile(wb, 'Company.xlsx');
//     }

//     onFileSelected(event) {
//         this.FileSelected = <File>event.target.files[0];
//     }

//     onUpload() {
//         const fileData = new FormData();
//         fileData.append('Excel file', this.FileSelected, this.FileSelected.name);
//         this._companyService.uploadFileExecl(fileData).subscribe((res) => {
//             this._messagesServic.toastNotification(
//                 '',
//                 'Data Added Successfully',
//                 true
//             );
//             this.getAllCompanys();
//             this.FileSelected = null;
//         });
//     }
// }