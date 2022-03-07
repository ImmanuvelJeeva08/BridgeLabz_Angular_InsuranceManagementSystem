import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Userlogin } from 'src/app/model/userlogin';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(
    private userService : UserService,
    private router : Router,
  ) { }

  user = new Userlogin();
  option = 2;

  ngOnInit(): void {
  }

  onSubmit(){
      console.log(this.user.email);
      this.userService.forgetPassword(this.user).subscribe(data=>{
        console.log(data);
        this.router.navigateByUrl("/otp/"+this.option);
      })
  }

}
