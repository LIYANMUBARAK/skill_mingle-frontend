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
import { CreateGigComponent } from './freelancer/create-gig/create-gig.component';
import {FormBuilder, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatSortModule } from '@angular/material/sort';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { userEffects } from '../user/components/user-store/user.effects';
import { userReducer } from '../user/components/user-store/user.reducer';
import { GigsListingComponent } from './components/gigs-listing/gigs-listing.component';
import { GigSinglepageComponent } from './components/gig-singlepage/gig-singlepage.component';
import { OrderComponent } from './components/order/order.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ChatComponent } from './components/chat/chat.component';
import { FreelancerChatComponent } from './freelancer/freelancer-chat/freelancer-chat.component';



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
    CreateGigComponent,
    UserEditComponent,
    GigsListingComponent,
    GigSinglepageComponent,
    OrderComponent,
    CheckoutComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ChatComponent,
    FreelancerChatComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    FontAwesomeModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    EffectsModule.forFeature([userEffects]),
    StoreModule.forFeature( "user",userReducer ),
    MatDialogModule
  ]
})
export class UserModule { }
