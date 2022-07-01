import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/core/services/company.service';
import { MessagesServiceService } from 'src/app/core/services/messages-service.service';
import jwt_decode from 'jwt-decode';
import { Company } from 'src/app/core/models/company';

@Component({
    selector: 'app-user-company',
    templateUrl: './user-company.component.html',
    styleUrls: ['./user-company.component.css']
})
export class UserCompanyComponent implements OnInit {

  CompanyId:string;
  editCompany:Company = new Company();
  constructor(public _companyService:CompanyService,public _messagesServic: MessagesServiceService) { }

  ngOnInit(): void {
    this.CompanyId=jwt_decode(localStorage.getItem('token'))['CompanyId'];
    
    this._companyService.GetCompanyByID(this.CompanyId).subscribe((res:Company) => {
      this.editCompany=res;
      console.log(res)
    })
    
  }



  saveCompany() {
    this.editCompany.lastModifiedBy = jwt_decode(localStorage.getItem('token'))[
        'sub'
    ];
    this._companyService.EditCompany(this.editCompany).subscribe((res) => {
        this._messagesServic.toastNotification(
            '',
            'Data Edited Successfully',
            true
        );

    });
}

}
