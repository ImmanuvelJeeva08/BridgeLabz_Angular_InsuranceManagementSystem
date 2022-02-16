import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
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

  otp : string;
  otpN : string = "";
  otpDefault : number =3333;
  option : number;
  jwt : string;
  editResult = new User();

  ngOnInit(): void {
  this.option = this.route.snapshot.params['id'];
   console.log(this.route.snapshot.params['id']);
  }


  onOtpChange($event){
    console.log($event.target.value);
    this.otp = $event.target.value;
    this.otpN = this.otpN + this.otp;
    console.log("OTP = "+this.otpN);
    console.log("Length = ",this.otpN.length);
  }

  otps(){
    console.log("Call");

    if(this.otpN.length === 4){
      if(this.option == 1){
          this.userService.otpVerification(this.otpN).subscribe(data => {
            console.log(data);
            this.router.navigateByUrl("/login");
            this.matSnackBar.open('OTP Sucessfully Verified','ok',{
              duration : 3000
            })
        },
        error => {alert(' enter valid OTP Number ');}
      )
      }if(this.option == 2){
        this.jwt = localStorage.getItem('jwtToken');
        this.jwt = "Bearer "+this.jwt;
        this.insuranceService.otpVerification(this.otpN,this.jwt).subscribe(data=>{
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
        
        console.log(this.editResult);
      
      }
      
    }else{
      alert('Please Enter 4 digit Number');
    }
  }

}
