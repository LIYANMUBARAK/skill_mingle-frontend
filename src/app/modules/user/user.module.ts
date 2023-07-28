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


@NgModule({
  declarations: [
    SignupComponent,
    VerifyOTPComponent,
    DashboardComponent,
    LoginComponent,
    LoginWithOTPComponent,
    NavbarComponent
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
