import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Claim } from 'src/app/model/claim';
import { User } from 'src/app/model/user';
import { InsuranceService } from 'src/app/service/insurance.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss']
})
export class ClaimComponent implements OnInit {

  claimInsurance : FormGroup;
  damageVehicleImage  : any;
  billImage      : any;
  chequeImage    : any;
  ImageUrl       : any;

  constructor(
    private fb: FormBuilder,
    private insuranceService : InsuranceService,
    private matSnackBar : MatSnackBar,
    private router : Router
  ) { 
    this.claimInsurance = this.fb.group({
      userFullName : new FormControl(),
      vehicleNo    : new FormControl(),
      mobileNo     : new FormControl(),
      reason       : new FormControl(),
      image        : new FormControl(),
      bill         : new FormControl(),
      cheque       : new FormControl()
    })
  }

  user = new User();
  claimUser = new Claim();
  reasonList: any = ['Accident', 'fire damage', 'Other reasons']
  jwt : string;
  otherReason = true;

  ngOnInit(): void {
    this.jwt = localStorage.getItem('jwtToken');
    this.user = JSON.parse(localStorage.getItem('loginUser'));
    this.claimInsurance.setValue({
      userFullName  : this.user.userFullName,
      vehicleNo     : this.user.vehicleNo,
      mobileNo      : this.user.mobileNo,
      reason        : '',
      image         : '',
      bill          : '',
      cheque        : ''
    })
  }

  onSubmit(){
    console.log(this.claimInsurance.value);
    console.log(this.user);
    this.claimUser.user = this.user;
    this.jwt = "Bearer "+this.jwt;
    this.claimUser.reason  = this.claimInsurance.get('reason').value;
    this.claimUser.base64image = this.damageVehicleImage;
    this.claimUser.bill = this.billImage;
    this.claimUser.cheque = this.chequeImage;

    this.insuranceService.claimInsurance(this.claimUser,this.jwt).subscribe(data=>{
      console.log(data);
      this.matSnackBar.open('Sucessfully Applied your Insurance','OK',{
        duration : 5000
      })
      this.router.navigate(["/home"]);
    })
  }

  onSelectedImage(event : any) {
    this.damageVehicleImage = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event:any) => { 
      this.damageVehicleImage = reader.result;
    }    
    reader.readAsDataURL(this.damageVehicleImage);
  }

  onSelectedBill(event : any) {
    this.billImage = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event:any) => { 
      this.billImage = reader.result;
    }    
    reader.readAsDataURL(this.billImage);
  }

  onSelectedCheque(event : any) {
    this.chequeImage = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event:any) => { 
      this.chequeImage = reader.result;
    }    
    reader.readAsDataURL(this.chequeImage);
  }

  onOptionsSelected(){
    console.log()
    if(this.claimInsurance.get('reason').value === "Other reasons"){
      this.otherReason = false;
    }
    else{
      this.otherReason = true;
    }
  }

}
