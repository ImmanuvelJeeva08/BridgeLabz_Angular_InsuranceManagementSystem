import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from '../model/claim';
import { User } from '../model/user';
import { Userlogin } from '../model/userlogin';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  
  baseURL :string = "http://localhost:8080/userSystem/"
  baseURL1 :string = "http://localhost:8080/claimInsuranceSystem/"
  
  userlogin = new Userlogin();
  

  constructor(
    private httpClient : HttpClient
  ) { }

  addNewInsurance(newInsurance : User,jwt : string) : Observable<any> {
    console.log(jwt)
    const header= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization',jwt);
    return this.httpClient.post(this.baseURL + "user" , newInsurance,  { headers: header });
  }

  editUser(editUser: User,jwt: string) : Observable<any>{
    console.log("Edit user iD =" + editUser.userId)
    const header= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization',jwt);
    return this.httpClient.put(this.baseURL + "user" , editUser, { headers: header });
  }

  claimInsurance(claimUser: Claim,jwt : string) {
    console.log(claimUser);
    console.log(jwt);
    const header= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization',jwt);
    return this.httpClient.post(this.baseURL1 + "claimInsurance", claimUser, { headers: header })
  }

  otpVerification(otpN: string,jwt : string) {
    console.log(otpN);
    console.log(jwt);
    const header= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization',jwt);
    var y = JSON.parse(otpN);
    this.userlogin.otp = y;
      return this.httpClient.post(this.baseURL + "otp",this.userlogin, { headers: header })
  }
}
