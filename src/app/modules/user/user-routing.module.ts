import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { VerifyOTPComponent } from './verify-otp/verify-otp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LoginWithOTPComponent } from './login-with-otp/login-with-otp.component';
import { UserAuthGuard } from './guards/user-auth.guard';
import { UserLoginAuthGuard } from './guards/user-login-auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FreelanceOverviewComponent } from './freelance-overview/freelance-overview.component';
import { FreelanceOverviewDosComponent } from './freelance-overview-dos/freelance-overview-dos.component';
import { FreelanceOverviewDontsComponent } from './freelance-overview-donts/freelance-overview-donts.component';
import { FreelancerSignupComponent } from './freelancer-signup/freelancer-signup.component';

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
    path:'dashboard',canActivate:[UserAuthGuard],
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
    path:'loginWithOTP',
    component:LoginWithOTPComponent
  },
  {
    path:'userProfile',canActivate:[UserAuthGuard],
    component:UserProfileComponent
  },
  {
    path:'freelanceOverview',canActivate:[UserAuthGuard],
    component:FreelanceOverviewComponent
  },
  {
    path:'freelanceOverview/do',canActivate:[UserAuthGuard],
    component:FreelanceOverviewDosComponent
  },
  {
    path:'freelanceOverview/dont',canActivate:[UserAuthGuard],
    component:FreelanceOverviewDontsComponent
  },
  {
    path:'freelancerSignup',canActivate:[UserAuthGuard],
    component:FreelancerSignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
