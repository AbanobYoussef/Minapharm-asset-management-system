import { Component, OnInit, Input } from '@angular/core';
import { EmployeeBankAccount } from 'src/app/core/models/employeeBankAccount';
import { BankService } from 'src/app/core/services/bank.service';
import { EmployeeBankAccountService } from 'src/app/core/services/employee-bank-account.service';
import { MessagesServiceService } from 'src/app/core/services/messages-service.service';

@Component({
    selector: 'app-employee-bankaccount',
    templateUrl: './employee-bankaccount.component.html',
    styleUrls: ['./employee-bankaccount.component.css'],
})
export class EmployeeBankaccountComponent implements OnInit {
    displayAddBankAccount: boolean;
    displayEditBankAccount: boolean;
    employeeAccounts: EmployeeBankAccount[];
    banks: any[];
    addemployeeAccount: EmployeeBankAccount = new EmployeeBankAccount();
    editemployeeAccount: EmployeeBankAccount = new EmployeeBankAccount();
    @Input() empId: string;

    constructor(
        private bankService: BankService,
        private employeeAccountService: EmployeeBankAccountService,
        public messagesServic: MessagesServiceService
    ) { }

    ngOnInit(): void {
        this.getAllAccountsByEmpId();
        this.getAllBanks();
    }
    getAllBanks() {
        //CompanyId
        this.bankService.getAllBanks().subscribe((res) => {
            this.banks = res;
        });
    }
    getAllAccountsByEmpId() {
        this.employeeAccountService
            .getEmployeeBankAccountByEmpId(this.empId)
            .subscribe((res) => {
                this.employeeAccounts = res;
            });
    }
    showaddBankAccount() {
        this.displayAddBankAccount = true;
    }
    showSelectedBank(e) {
        this.addemployeeAccount.bankId = e.target.value;
        this.editemployeeAccount.bankId = e.target.value;
    }
    SaveAccount(closeAdd) {
        this.addemployeeAccount.employeeId = this.empId;
        this.employeeAccountService
            .addEmployeeBankAccount(this.addemployeeAccount)
            .subscribe((res) => {
                this.getAllAccountsByEmpId();
                this.messagesServic.toastNotification(
                    '',
                    'Data Added Successfully',
                    true
                );
                closeAdd.click()
            });
        this.displayAddBankAccount = false;
    }
    EditAccount(acc) {
        this.editemployeeAccount = acc;
    }
    SaveEditAccount(closeAdd) {
        this.employeeAccountService
            .editEmployeeBankAccount(this.editemployeeAccount)
            .subscribe((res) => {
                this.getAllAccountsByEmpId();
                this.messagesServic.toastNotification(
                    '',
                    'Data Updated Successfully',
                    true
                );
                this.displayEditBankAccount = false;
                closeAdd.click();
            });
    }
    DeleteAccount(acc) {
        this.messagesServic.confirmDelete().subscribe((resp) => {
            if (resp.success) {
                this.employeeAccountService
                    .deleteEmployeeBankAccountById(acc.id)
                    .subscribe((res) => {
                        this.getAllAccountsByEmpId();
                        this.messagesServic.toastNotification(
                            '',
                            'Data Deleted Successfully',
                            true
                        );
                    });
            } else {
                this.getAllAccountsByEmpId();
            }
        });
    }
}
