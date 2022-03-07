import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { Userlogin } from 'src/app/model/userlogin';
import { InsuranceService } from 'src/app/service/insurance.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  constructor(
    private userService : UserService,
    private router : Router,
    private matSnackBar : MatSnackBar,
    private route: ActivatedRoute,
    private insuranceService : InsuranceService
  ) { }

  first : any = "";
  second : any = "";
  third : any = "";
  four : any = "";
  otpValue : string = "";
  otpSend = new Userlogin();
  otp : string;
  otpN : string = "";
  otpDefault : number =3333;
  jwt : string;
  option : number;
  editResult = new User();
  email : any;

  ngOnInit(): void {
    this.option = this.route.snapshot.params['id'];
    this.jwt = localStorage.getItem('jwtToken');
        this.jwt = "Bearer "+this.jwt;
  }

  onSubmit(){
    console.log("Call");
    if(this.first != "" && this.second != "" && this.third != "" && this.four != "" ){
      this.otpSend.otp = this.first + this.second + this.third + this.four;
      if(this.option == 1){
        this.insuranceService.otpVerification(this.otpSend,this.jwt).subscribe(data=>{
          console.log(data);
          this.editResult = Object.values(data)[0];
          console.log(this.editResult);
          this.matSnackBar.open("Sucessfully Updated user Details!", "ok",{
          duration : 5000
        })
        localStorage.removeItem('loginUser');
        localStorage.setItem("loginUser", JSON.stringify(this.editResult))
        this.router.navigateByUrl('/profile');
        })
      }else if(this.option == 2){
        this.userService.otpForPasswordReset(this.otpSend).subscribe(data=>{
          console.log(data);
          this.matSnackBar.open("OTP sucessfully Verified...","OK",{
            duration : 3000
          })
          this.router.navigateByUrl("resetpassword");
        })
      }
        
    }else{
        console.log("Not Verified");
        this.matSnackBar.open('Please Enter 4 Digit Number','OK',{
          duration : 3000
        })
      }
  }

  resendOTP(){
    this.otpSend.email = "immanuveljeeva2000@gmail.com";
    this.userService.resendOtp(this.otpSend,this.jwt).subscribe(data=>{
        console.log(data);
    },error=>{
      this.matSnackBar.open('OTP not send! Something went wrong','OK',{
        duration : 3000
      })
    }
    )
  }
}
