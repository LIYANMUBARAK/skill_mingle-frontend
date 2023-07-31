import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { VerifyOTPComponent } from './verify-otp/verify-otp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LoginWithOTPComponent } from './login-with-otp/login-with-otp.component';
import { UserAuthGuard } from './guards/user-auth.guard';
import { UserLoginAuthGuard } from './guards/user-login-auth.guard';

const routes: Routes = [
  {
    path:'signup',canActivate:[UserLoginAuthGuard],
    component:SignupComponent
  },
  {
    path:'verifyOTP/:phoneNumber',canActivate:[UserLoginAuthGuard],
    component:VerifyOTPComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'login',canActivate:[UserLoginAuthGuard],
    component:LoginComponent
  },
  {
    path:'loginWithOTP',canActivate:[UserLoginAuthGuard],
    component:LoginWithOTPComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
