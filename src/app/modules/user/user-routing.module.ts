import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { VerifyOTPComponent } from './components/verify-otp/verify-otp.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { LoginWithOTPComponent } from './components/login-with-otp/login-with-otp.component';
import { UserAuthGuard } from './guards/user-auth.guard';
import { UserLoginAuthGuard } from './guards/user-login-auth.guard';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FreelanceOverviewComponent } from './freelancer/freelance-overview/freelance-overview.component';
import { FreelanceOverviewDosComponent } from './freelancer/freelance-overview-dos/freelance-overview-dos.component';
import { FreelanceOverviewDontsComponent } from './freelancer/freelance-overview-donts/freelance-overview-donts.component';
import { FreelancerSignupComponent } from './freelancer/freelancer-signup/freelancer-signup.component';
import { FreelanceDashboardComponent } from './freelancer/freelance-dashboard/freelance-dashboard.component';
import { FreelancerGigsComponent } from './freelancer/freelancer-gigs/freelancer-gigs.component';
import { CreateGigComponent } from './freelancer/create-gig/create-gig.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { GigsComponent } from '../admin/components/gigs/gigs.component';
import { GigsListingComponent } from './components/gigs-listing/gigs-listing.component';
import { GigSinglepageComponent } from './components/gig-singlepage/gig-singlepage.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ChatComponent } from './components/chat/chat.component';

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
  },
  {
    path:'freelancerDashboard',canActivate:[UserAuthGuard],
    component:FreelanceDashboardComponent
  },
  {
    path:'gigManagement',canActivate:[UserAuthGuard],
    component:FreelancerGigsComponent
  },
  {
    path:'createGig',canActivate:[UserAuthGuard],
    component:CreateGigComponent
  },
  {
    path:'userEdit',canActivate:[UserAuthGuard],
    component:UserEditComponent
  },
  {
    path:'gigs',canActivate:[UserAuthGuard],
    component:GigsListingComponent
  },
  {
    path:'gigDetails',canActivate:[UserAuthGuard],
    component:GigSinglepageComponent
  },
  {
    path:'checkout',canActivate:[UserAuthGuard],
    component:CheckoutComponent
  },
  {
    path:'forgotPassword',
    component:ForgotPasswordComponent
  },
  {
    path:'resetPassword',
    component:ResetPasswordComponent
  },
  {
    path:'chat',canActivate:[UserAuthGuard],
    component:ChatComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
