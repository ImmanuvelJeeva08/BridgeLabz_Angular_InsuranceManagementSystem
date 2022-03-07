import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  otpVerification(otp: any):Observable<any> {
    console.log("OTP = "+otp)
    return this.httpClient.post(this.baseUrl2 + "save", otp
    );
  }

  resendOtp(email: any, jwt : string):Observable<any> {
    const header = new HttpHeaders()
      .set('Authorization',this.jwt);
    return this.httpClient.post(this.baseUrl2 + "generateOTP", email , { headers : header}
    );
  }

  forgetPassword(user: any) : Observable<any> {
    return this.httpClient.post(this.baseUrl2 + "forgetpassword", user);
  }

  otpForPasswordReset(user: any) : Observable<any> {
    console.log(user);
    return this.httpClient.post(this.baseUrl2 + "otpverify", user);
  }  

  changePassword(user: any) : Observable<any> {
    console.log(user);
    return this.httpClient.post(this.baseUrl2 + "resetpassword", user);
  }

}
