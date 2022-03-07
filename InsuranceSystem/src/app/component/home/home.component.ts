import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { User } from 'src/app/model/user';
import { InsuranceService } from 'src/app/service/insurance.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private insuranceService : InsuranceService,
    private matSnackBar : MatSnackBar
  ) { }

  claimstatus = true;
  newIns = true;
  claimIns = true;
  profile = true;
  loginUser = new User();
  jwt :string;
  admin = true;

  ngOnInit() {

    if(localStorage.getItem('admin') === 'admin'){
      this.admin = false;
      this.claimstatus = true;
      this.newIns = true;
      this.claimIns = true;
      this.profile = true;
    }else{
      this.loginUser = JSON.parse(localStorage.getItem('loginUser'));
      console.log(this.loginUser);
      this.jwt  = localStorage.getItem('jwtToken');
      this.jwt = "Bearer "+this.jwt;
  
      if( this.loginUser === null){
        console.log("IF")
        this.profile = true;
        this.claimIns = true;
        this.newIns = false;
      }else{
        this.insuranceService.getClaimedDetailsbyEmail(this.loginUser.email,this.jwt).subscribe(data=>{
          console.log(data);
          localStorage.setItem('claimedUser', JSON.stringify(Object.values(data)[0]))
          console.log("ELSE")
        console.log(JSON.parse(localStorage.getItem('claimedUser')))
          if( JSON.parse(localStorage.getItem('claimedUser')) !== null){
            console.log("IF 1")
            this.claimIns = true;
            this.newIns = true;
            this.profile = false;
            this.claimstatus = false;
            console.log(this.claimstatus)
          }else{
        console.log("ELSE 1")
            this.claimstatus = true;
            this.newIns = true;
            this.claimIns = false;
            this.profile = false;
            console.log(this.claimstatus);
          }
        })
        
      }
      
    }
    
  }

  logout(){
      localStorage.clear();
  }

  refresh(){
      location.reload(); 
  }

}
