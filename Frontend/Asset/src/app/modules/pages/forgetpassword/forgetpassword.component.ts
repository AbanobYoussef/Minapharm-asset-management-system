import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessagesServiceService } from 'src/app/core/services/messages-service.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-forgetpassword',
    templateUrl: './forgetpassword.component.html',
    styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

    email: string;
    constructor(
        public _authService: AuthService,
        public _messagesServic: MessagesServiceService,
        private router: Router) { }

    ngOnInit(): void { }

    submit() {
        console.log(this.email);
        this._authService.forgetPassword(this.email).subscribe((userres) => {

            console.log(userres);
            if (userres == 'No user associated with email') {
                this._messagesServic.toastNotification(
                    '',
                    'No user associated with email',
                    false
                );
            } else {
                this._messagesServic.toastNotification(
                    '',
                    '"Reset password URL has been sent to the email successfully!"',
                    true
                );

                this.router.navigate(['/login']);
            }
        });
    }

}
