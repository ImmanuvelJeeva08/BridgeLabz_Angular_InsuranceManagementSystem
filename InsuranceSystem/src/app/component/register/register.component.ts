import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { FormBuilder, FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OtpComponent } from '../otp/otp.component';
import { $ } from 'protractor';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public error = null;
  public hide = true;
  num = 1;
  registerUser : FormGroup;
  public valideUser = false;
  public tokenValue = null;
  public isLoading = false;
  public form = {
    username: null,
    email : null,
    password: null
  };

  constructor(
    private userService : UserService,
    private router : Router,
    private fb : FormBuilder,
    private matSnackBar: MatSnackBar,
  ) {
    this.registerUser = this.fb.group({
      username : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required),
    })
   }


  ngOnInit(): void {
  }

  onSubmit() {

    this.userService.register(this.registerUser.value).subscribe(data => {
      console.log(data);
      this.matSnackBar.open('Sucessfully send ActivationLink to Given EmailId' , 'ok', {
        duration: 3000
      });
      this.router.navigateByUrl('/login');
    },
    error => {alert(' enter valid user credentials ');}
    )
  }
}
