import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { Userlogin } from 'src/app/model/userlogin';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-display-insurnce',
  templateUrl: './display-insurnce.component.html',
  styleUrls: ['./display-insurnce.component.scss']
})
export class DisplayInsurnceComponent implements OnInit {

  constructor(
    private userService : UserService,
 ) { }

 public insuranceDetails: any;
 public insuranceCount: number = 0;

 jwtToken : string;

 ngOnInit(): void {
   this.jwtToken = localStorage.getItem('jwtToken');
   console.log("jwtToken = "+this.jwtToken);
      this.userService.getUserDetails(this.jwtToken).subscribe(data => {
        console.log(data);
        console.log(Object.values(data)[0]);
        this.insuranceDetails = Object.values(data)[0];
      this.insuranceCount = this.insuranceDetails.length;
    });
 }


 remove(id : number){

 }

 update(user: User){

 }
}
