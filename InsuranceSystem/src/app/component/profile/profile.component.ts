import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { InsuranceService } from 'src/app/service/insurance.service';
import { UserService } from 'src/app/service/user.service';
import { OtpComponent } from '../otp/otp.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private fb : FormBuilder,
    private matSnackBar :MatSnackBar,
    private insuranceService : InsuranceService,
    private userService : UserService,
    private router : Router
  ) { 
    this.editUser = this.fb.group({
    userId                      : new FormControl('',Validators.required),
    userFullName            : new FormControl('',[ Validators.required, Validators.pattern("^[A-Z][a-zA-z\\s]{2,}$")]),
    dob                     : new FormControl('',Validators.required),
    email                   : new FormControl('',Validators.required),
    address                 : new FormControl('',Validators.required),
    mobileNo                : new FormControl('',[ Validators.required, Validators.pattern("[6-9][0-9]{9}")]),
    insuranceAmountPerMonth : new FormControl('',Validators.required),
    insuranceYear           : new FormControl('',Validators.required),
    vehicleModel            : new FormControl('',Validators.required),
    vehicleNo               : new FormControl('',[ Validators.required, Validators.pattern("^[A-Z]{2}[\\s][0-9]{2}[\\s][A-Z]{2}[\\s][0-9]{4}$")]),
    vehicleType             : new FormControl('',Validators.required),
    })
  }

  user = new User();
  user1 : string;
  userName : string ;
  editUser : FormGroup;
  inactive = true;
  userEdit = new User();
  enableEdit = true;
  jwt :string;
  num =2 ;

  ngOnInit(): void {
    this.user1 = localStorage.getItem('loginUser');
    this.user = JSON.parse(this.user1);
    console.log("Login ="+this.user.userFullName);
    this.userName = this.user.userFullName;
    console.log(this.user)
    this.editUser.patchValue({
      userId : this.user.userId,
      userFullName:this.user.userFullName,
      dob:this.user.dob,
      email:this.user.email,
      address:this.user.address,
      mobileNo:this.user.mobileNo,
      insuranceAmountPerMonth:this.user.insuranceAmountPerMonth,
      insuranceYear : this.user.insuranceYear,
      vehicleModel:this.user.vehicleModel,
      vehicleNo:this.user.vehicleNo,
      vehicleType: this.user.vehicleType,
    });
    this.userEdit.userId = this.user.userId;
  }

  onEdit(){
    this.inactive = false;
    this.enableEdit = false;
    this.matSnackBar.open("Sucessfully Enable Edit Option !", "ok",{
      duration : 5000
    })
  }

  update(){
    this.enableEdit = true;
    this.inactive = true;
    this.userName = this.editUser.get('userFullName').value;
    this.jwt =localStorage.getItem('jwtToken');
    this.jwt = "Bearer "+this.jwt;
    this.userEdit = this.editUser.value;
    console.log(this.userEdit);
      this.insuranceService.editUser(this.userEdit,this.jwt).subscribe(data=>{
        console.log(data);
      
      })
      this.router.navigateByUrl('/otp/' +this.num);      
  }

  cancel(){
    this.enableEdit = true;
    this.inactive = true;
  }

}
