import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public error = null;
  public hide = true;
  public valideUser = false;
  public tokenValue = null;
  public isLoading = false;
  insuranceUser : FormGroup;
  public form = {
    username: null,
    password: null
  };

  constructor(
    private userService : UserService,
    private router : Router,
    private fb : FormBuilder,
    private matSnackBar : MatSnackBar
  ) {
    this.insuranceUser = this.fb.group({
      username : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required),
    })
   }

  ngOnInit(): void {
    localStorage.clear();
  }

  onSubmit() {
    console.log(this.insuranceUser);
    this.userService.login(this.insuranceUser.value).subscribe(data => {
      console.log(data);
      localStorage.setItem('jwtToken', data.jwttoken);
      console.log(data.loginUser);
          localStorage.setItem('loginUser', JSON.stringify(data.loginUser));
      this.matSnackBar.open('User credentials verified Sucessfully' , 'ok', {
        duration: 3000
      });
      this.router.navigateByUrl("/home");
    },
    error => {alert(' enter valid username and password ');}
    )
  }

}
