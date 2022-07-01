import { Company } from './../../../../core/models/company';
import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/core/models/register.model';
import { CompanyService } from 'src/app/core/services/company.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessagesServiceService } from 'src/app/core/services/messages-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
    company = new Company();
    user = new Register();
    comfirmPassword: string;
    UserForm = new FormGroup({
        UserName: new FormControl(''),
        Email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
        Password: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        ConfirmPassword: new FormControl(''),
        NamePrimary: new FormControl('', Validators.required)
    });

    ngOnInit(): void {
        if (localStorage.getItem('token')) {
            this.router.navigate(['/home']);
        }
    }

    constructor(
        public _authService: AuthService,
        public _companyService: CompanyService,
        public _messagesServic: MessagesServiceService,
        private router: Router
    ) { }





    submit() {
        if (this.UserForm.controls.Password.value == this.UserForm.controls.ConfirmPassword.value && this.UserForm.valid) {
            this.user.userName = this.UserForm.get('UserName').value;
            this.user.email = this.UserForm.get('Email').value;
            this.user.password = this.UserForm.get('Password').value;
            this.user.companyName = this.UserForm.get('NamePrimary').value;

            this.user.roleName="company";


          /*  this.UserForm.removeControl('ConfirmPassword')*/
            this._authService.register(this.UserForm).subscribe((userres) => {

                console.log(userres);
                // console.log(userres['token']);

                console.log(userres);
                if (userres == 'Email is already registered!') {
                    this._messagesServic.toastNotification(
                        '',
                        'Email is already registered!',
                        false
                    );
                } else if (userres == 'Username is already registered!') {
                    this._messagesServic.toastNotification(
                        '',
                        'Username is already registered!',
                        false
                    );
                } else {
                    this._messagesServic.toastNotification(
                        '',
                        'E-mail Confirmation Send Successfully',
                        true
                    );
                    this.router.navigate(['/login']);
                }
            });
        }
    }

}
