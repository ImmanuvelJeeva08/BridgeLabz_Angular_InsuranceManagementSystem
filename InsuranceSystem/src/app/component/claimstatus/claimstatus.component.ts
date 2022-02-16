import { Component, OnInit } from '@angular/core';
import { Claim } from 'src/app/model/claim';

@Component({
  selector: 'app-claimstatus',
  templateUrl: './claimstatus.component.html',
  styleUrls: ['./claimstatus.component.scss']
})
export class ClaimstatusComponent implements OnInit {

  constructor() { }

  claimedUser = new Claim();

  ngOnInit(): void {
    this.claimedUser = JSON.parse(localStorage.getItem('claimedUser'));
 
  }
  

}
