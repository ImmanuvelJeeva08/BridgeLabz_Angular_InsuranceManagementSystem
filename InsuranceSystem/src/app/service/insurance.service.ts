import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
      .set('Authorization',jwt);
    return this.httpClient.post(this.baseURL + "user" , newInsurance,  { headers: header });
  }

  editUser(editUser: User,jwt: string) : Observable<any>{
    const header= new HttpHeaders()
      .set('Authorization',jwt);
    return this.httpClient.put(this.baseURL + "user" , editUser, { headers: header });
  }

  claimInsurance(claimUser: Claim,jwt : string) {
    const header= new HttpHeaders()
      .set('Authorization',jwt);
    return this.httpClient.post(this.baseURL1 + "claimInsurance", claimUser, { headers: header })
  }

  otpVerification(otp: any,jwt : string) {
    const header= new HttpHeaders()
      .set('Authorization',jwt);
      return this.httpClient.post(this.baseURL + "otp", otp, { headers: header })
  }

  getClaimedDetailsbyEmail(email : string, jwt: string){
    const header= new HttpHeaders()
      .set('Authorization',jwt);
    return this.httpClient.get(this.baseURL1 + "claimedById", { 
      headers: header,
      params: new HttpParams().append('email', email),
     })
  }
}
