import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { openStdin } from 'process';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Userlogin } from '../model/userlogin';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(
    private httpClient: HttpClient
  ) { }

  baseUrl : string = "http://localhost:8080/userSystem/"
  baseUrl1 : string ="http://localhost:8080/authenticate"
  baseUrl2 : string ="http://localhost:8080/"

  userlogin = new Userlogin();
  option : string = "";

  jwt : string;
  getUserDetails(jwtToken :string) {
    this.jwt = "Bearer " + jwtToken;
    const header= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization',this.jwt);

    return this.httpClient.get(this.baseUrl + "allUsers", { headers: header }
    );
  }

  login(user :any) :Observable<any> {
    console.log(user);
      return this.httpClient.post(this.baseUrl1, user);
  }

  register(user : any): Observable<any> {
    console.log(user);
    return this.httpClient.post(this.baseUrl2 + "register" , user);
  }

  otpVerification(otp: string):Observable<any> {
    console.log("OTP = "+otp)
    var y = JSON.parse(otp);
    console.log("Y =",y);
    console.log(typeof(y));
    this.userlogin.otp = y;
    return this.httpClient.post(this.baseUrl2 + "save", this.userlogin
    );
  }


}
