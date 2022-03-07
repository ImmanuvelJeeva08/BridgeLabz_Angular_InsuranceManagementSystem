import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { InsuranceService } from 'src/app/service/insurance.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(
    private fb : FormBuilder,
    private insuranceService : InsuranceService,
    private matSnackBar :MatSnackBar,
    private router : Router
  ) { 
    this.addInsuranceUser = this.fb.group({
    userFullName            : new FormControl('', [ Validators.required, Validators.pattern("^[A-Z][a-zA-z\\s]{2,}$")]),
    dob                     : new FormControl('',Validators.required),
    email                   : new FormControl('',Validators.required),
    address                 : new FormControl('',Validators.required),
    mobileNo                : new FormControl('',[ Validators.required, Validators.pattern("[6-9][0-9]{9}")]),
    insuranceAmountPerMonth : new FormControl('',Validators.required),
    insuranceYear           : new FormControl('',Validators.required),
    vehicleModel            : new FormControl('',Validators.required),
    vehicleNo               : new FormControl('',[ Validators.required, Validators.pattern("^[A-Z]{2}[\\s][0-9]{2}[\\s][A-Z]{2}[\\s][0-9]{4}$")]),
    vehicleType             : new FormControl('', Validators.required),
    })
  }

  addInsuranceUser : FormGroup;
  today :Date;
  newInsurance = new User();
  jwt :string;
  public vehicleModelLsit: any[] = [
    {value: 'Suziki',  viewValue: 'Suziki'},
    {value: 'Bajaj',   viewValue: 'Bajaj'},
    {value: 'Maruthi', viewValue: 'Maruthi'},
    {value: 'KTM',     viewValue: 'KTM'},
  ];

  ngOnInit(): void {
   this.today = new Date(Date.now());
  }

  getToday() {
    this.today.setFullYear( this.today.getFullYear() - 18 );
}

onSubmit(){
  this.jwt = localStorage.getItem('jwtToken');
  this.jwt = "Bearer "+this.jwt;
  this.newInsurance = this.addInsuranceUser.value;
  console.log(this.newInsurance);
  this.insuranceService.addNewInsurance(this.newInsurance,this.jwt).subscribe(data=> {
    console.log(data);
    localStorage.setItem('loginUser', JSON.stringify(data.data));
    this.matSnackBar.open('User Details Added Sucessfully','ok',{
      duration : 3000
    })
    this.router.navigateByUrl("/home");
  })

}

  public checkError = (controlName: string, errorName: string) => {
    return this.addInsuranceUser.controls[controlName].hasError(errorName);
  }

}
