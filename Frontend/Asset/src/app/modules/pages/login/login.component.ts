import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/core/services/company.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessagesServiceService } from 'src/app/core/services/messages-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from 'src/app/core/models/login.model';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    isToken: boolean = false;
    user = new Login();
    constructor(
        public _authService: AuthService,
        public _messagesServic: MessagesServiceService,
        private router: Router) { }

    ngOnInit(): void {
        if (localStorage.getItem('token')) {
            this.router.navigate(['/home']);
        }

    }
    resolved(captchaResponse: string) {
        this.isToken = true;
    }
    login() {
        this.user.email = this.UserForm.get('Email').value;
        this.user.password = this.UserForm.get('Password').value;

        console.log(this.user);

        this._authService.login(this.user).subscribe((userres) => {

            console.log(userres);
            if (userres == 'Email or Password is incorrect!') {
                this._messagesServic.toastNotification(
                    '',
                    'Email or Password is incorrect!',
                    false
                );
            } else {

                this._messagesServic.toastNotification(
                    '',
                    'User Login Successfully',
                    true
                );
                console.log(userres['token']);
                localStorage.setItem("token", userres['token']);
                localStorage.setItem("userres",JSON.stringify( jwt_decode(userres['token'])));
                console.log(jwt_decode(userres['token']));

                if (jwt_decode(userres['token'])['OrganizationId'] == '') {
                    this._messagesServic.toastNotification(
                        '',
                        'Please At least add one Organization',
                        false
                    );
                }
                this.router.navigate(['/home']);
            }
        });


    }

    UserForm = new FormGroup({
        Email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
        Password: new FormControl('', Validators.required)
    });



    CreateAccount() {
        this.router.navigate(['/register']);
    }


    ForgetPassword() {
        this.router.navigate(['/forgetpassword']);
    }

}
