import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResetPassword } from 'src/app/core/models/reset-password.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessagesServiceService } from 'src/app/core/services/messages-service.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-resetpassword',
    templateUrl: './resetpassword.component.html',
    styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

    resetpassword = new ResetPassword();
    
        UserForm = new FormGroup({
            Password: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            ConfirmPassword: new FormControl('')
        });

    constructor(private route: ActivatedRoute,
        public _messagesServic: MessagesServiceService,
        public _authService: AuthService,
        private router: Router) { }

  

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.router.navigate(['/home']);
    }
     this.route.queryParams
     .subscribe(params => {
       this.resetpassword.email=params.email; 
       this.resetpassword.token=params.token; 
       console.log(params.token); 
       console.log(params.email); 
     }
   );
  }

  submit(){

      if(this.UserForm.get('Password').value == this.UserForm.get('ConfirmPassword').value){
        this.resetpassword.newPassword=this.UserForm.get('Password').value;


      this._authService.resetPassword(this.resetpassword).subscribe((res) => {
        

        console.log(res);
        if (res == 'No user associated with email') {
          this._messagesServic.toastNotification(
            '',
            'No user associated with email',
            false
          );
        } else {
          this._messagesServic.toastNotification(
            '',
            'Password has been reset successfully!',
            true
          );

          this.router.navigate(['/login']);
        }
      });
      }
      

    }

}


