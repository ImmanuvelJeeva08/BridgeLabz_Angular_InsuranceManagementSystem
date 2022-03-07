import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayInsurnceComponent } from './component/display-insurnce/display-insurnce.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home/home.component';
import { AddComponent } from './component/add/add.component';
import { ClaimComponent } from './component/claim/claim.component';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule} from '@angular/material/badge';
import { MatSelectModule} from '@angular/material/select';
import { MatStepperModule} from '@angular/material/stepper';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { OtpComponent } from './component/otp/otp.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonToggleModule, MatRadioModule } from '@angular/material';
import { ProfileComponent } from './component/profile/profile.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { ClaimstatusComponent } from './component/claimstatus/claimstatus.component';
import { NgDisableLinkModule } from 'ng-disable-link';
import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayInsurnceComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddComponent,
    ClaimComponent,
    OtpComponent,
    ProfileComponent,
    ClaimstatusComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    NgDisableLinkModule,
    MatButtonToggleModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    NgOtpInputModule,
    MatBadgeModule,
    MatSelectModule,
    MatSnackBarModule,
    MatStepperModule,
    MatRadioModule,
    MatToolbarModule,
    MatMenuModule,
    MatExpansionModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
