import { Component, OnInit } from '@angular/core';
import { Window } from 'selenium-webdriver';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  claimstatus = true;

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('claimedUser')))
    if( JSON.parse(localStorage.getItem('claimedUser')) !== null){
      this.claimstatus = false;
      console.log(this.claimstatus)
    }else{
      this.claimstatus = true;
      console.log(this.claimstatus);
      // this.refresh();
    }
  }

  logout(){
      localStorage.clear();
  }

  refresh(){
      location.reload(); 
  }

}
