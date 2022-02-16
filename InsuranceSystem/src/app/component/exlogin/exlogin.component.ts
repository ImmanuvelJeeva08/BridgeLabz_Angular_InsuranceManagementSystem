import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exlogin',
  templateUrl: './exlogin.component.html',
  styleUrls: ['./exlogin.component.scss']
})
export class ExloginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  edit(){
    console.log("Yes");
  }

}
