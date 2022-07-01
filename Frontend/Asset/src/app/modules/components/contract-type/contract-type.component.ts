import { Component, OnInit } from '@angular/core';
import { ContratTypeService } from 'src/app/core/services/contrat-type.service';
import { ContractType } from 'src/app/core/models/contractTypes';
import { MessagesServiceService } from 'src/app/core/services/messages-service.service';
import { DefaultData } from 'src/app/core/models/defaultData';
import { DefaultDataService } from 'src/app/core/services/default-data.service';

@Component({
    selector: 'app-contract-type',
    templateUrl: './contract-type.component.html',
    styleUrls: ['./contract-type.component.css']
})
export class ContractTypeComponent implements OnInit {
    // contracts: ContractType[]
    // addContracts: ContractType = new ContractType()
    // editContracts:ContractType=new ContractType()
    contracts: DefaultData[]
    addContracts: DefaultData = new DefaultData()
    editContracts: DefaultData = new DefaultData()
    typeId = 1
    displayModalAddContract: boolean
    displayModalEditContract: boolean
    user:any
    constructor(private contracttypeservice: ContratTypeService,
        private defaultdataservice: DefaultDataService, public messagesServic: MessagesServiceService) { }

    ngOnInit(): void {
        this.user=JSON.parse(localStorage.getItem("userres"))

        this.getAllContractTypes()
    }
    showAddContractType() {
        this.displayModalAddContract = true
    }
    getAllContractTypes() {

        this.defaultdataservice.getAllDefaultDataByTypeId(this.typeId,this.user.CompanyId).subscribe(res => {
            this.contracts = res
        })
    }
    saveContractType(closeModal) {
        this.addContracts.type = 1
        this.addContracts.companyId=this.user.CompanyId
        this.defaultdataservice.addDefaultData(this.addContracts).subscribe(res => {

            this.getAllContractTypes()
            this.messagesServic.toastNotification("", "Data Added Successfully", true)
            closeModal.click()
        })
        this.addContracts.namePrimary = ''
        this.addContracts.nameSecondary = ''
    }
    editContractType(type) {
        this.editContracts = type
    }
    saveEditContractType(closeEdit) {
        this.editContracts.type = 1
        this.defaultdataservice.editDefaultData(this.editContracts).subscribe(res => {

            this.getAllContractTypes()
            this.messagesServic.toastNotification("", "Data Updated Successfully", true)
            closeEdit.click()
        })
    }
    deleteContractType(type) {
        this.messagesServic.confirmDelete().subscribe(resp => {
            if (resp.success) {
                this.defaultdataservice.deleteDefaultData(type).subscribe(res => {
                    this.getAllContractTypes()
                    this.messagesServic.toastNotification("", "Data Deleted Successfully", true)
                })
            }
            else {
                this.getAllContractTypes()
            }
        });

    }

}
