import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Userlogin } from 'src/app/model/userlogin';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  constructor(
    private userService : UserService,
    private matSnackBar : MatSnackBar,
    private router : Router,
  ) { }

  user = new Userlogin();

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.changePassword(this.user).subscribe(data=>{
      console.log(data);
      this.matSnackBar.open('Password sucessfully changed...','OK',{
        duration : 3000
      })
      this.router.navigateByUrl("/login");
    })
  }

}
