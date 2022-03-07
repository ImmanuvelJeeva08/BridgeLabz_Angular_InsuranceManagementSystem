import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './component/add/add.component';
import { ClaimComponent } from './component/claim/claim.component';
import { ClaimstatusComponent } from './component/claimstatus/claimstatus.component';
import { DisplayInsurnceComponent } from './component/display-insurnce/display-insurnce.component';
import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { OtpComponent } from './component/otp/otp.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent } from './component/register/register.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';


const routes: Routes = [
  { path: '', redirectTo : "/login", pathMatch: 'full'},
  { path : "display", component : DisplayInsurnceComponent},
  { path : "login"  , component : LoginComponent},
  { path : "register", component : RegisterComponent},
  { path : "home", component : HomeComponent},
  { path : "add", component : AddComponent},
  { path : "claim", component : ClaimComponent},
  { path : "otp", component : OtpComponent},
  { path : "profile", component : ProfileComponent},
  { path : "claimStatus", component : ClaimstatusComponent},
  { path: 'otp/:id', component: OtpComponent},
  { path : "resetpassword", component : ResetpasswordComponent},
  { path : "forgetpassword", component : ForgetpasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
