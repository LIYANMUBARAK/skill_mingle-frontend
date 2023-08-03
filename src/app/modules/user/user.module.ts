import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgOtpInputModule } from 'ng-otp-input';

import { UserRoutingModule } from './user-routing.module';
import { SignupComponent } from './signup/signup.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { VerifyOTPComponent } from './verify-otp/verify-otp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LoginWithOTPComponent } from './login-with-otp/login-with-otp.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FreelanceOverviewComponent } from './freelance-overview/freelance-overview.component';
import { FreelancerNavbarComponent } from './freelancer-navbar/freelancer-navbar.component';
import { FreelanceOverviewDosComponent } from './freelance-overview-dos/freelance-overview-dos.component';
import { FreelanceOverviewDontsComponent } from './freelance-overview-donts/freelance-overview-donts.component';


@NgModule({
  declarations: [
    SignupComponent,
    VerifyOTPComponent,
    DashboardComponent,
    LoginComponent,
    LoginWithOTPComponent,
    NavbarComponent,
    UserProfileComponent,
    FreelanceOverviewComponent,
    FreelancerNavbarComponent,
    FreelanceOverviewDosComponent,
    FreelanceOverviewDontsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgOtpInputModule
  ]
})
export class UserModule { }
