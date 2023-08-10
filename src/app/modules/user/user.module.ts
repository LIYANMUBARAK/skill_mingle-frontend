import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgOtpInputModule } from 'ng-otp-input';

import { UserRoutingModule } from './user-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { VerifyOTPComponent } from './components/verify-otp/verify-otp.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { LoginWithOTPComponent } from './components/login-with-otp/login-with-otp.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FreelanceOverviewComponent } from './freelancer/freelance-overview/freelance-overview.component';
import { FreelancerNavbarComponent } from './freelancer/freelancer-navbar/freelancer-navbar.component';
import { FreelanceOverviewDosComponent } from './freelancer/freelance-overview-dos/freelance-overview-dos.component';
import { FreelanceOverviewDontsComponent } from './freelancer/freelance-overview-donts/freelance-overview-donts.component';
import { FreelancerSignupComponent } from './freelancer/freelancer-signup/freelancer-signup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FreelanceDashboardComponent } from './freelancer/freelance-dashboard/freelance-dashboard.component';
import { FreelancerGigsComponent } from './freelancer/freelancer-gigs/freelancer-gigs.component';


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
    FreelanceOverviewDontsComponent,
    FreelancerSignupComponent,
    FreelanceDashboardComponent,
    FreelancerGigsComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    FontAwesomeModule
  ]
})
export class UserModule { }
