import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserModule } from './modules/user/user.module';
import { HttpClientModule } from '@angular/common/http';


//Firebase and environment modules

import { AngularFireAuthModule } from '@angular/fire/compat/auth'

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';

// OTP module

import { NgOtpInputModule } from  'ng-otp-input';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDUNRnhIgaSZWBLE0tIivtHs9wBNYkZlxA",

      authDomain: "skill-mingle-64304.firebaseapp.com",
    
      projectId: "skill-mingle-64304",
    
      storageBucket: "skill-mingle-64304.appspot.com",
    
      messagingSenderId: "273390932311",
    
      appId: "1:273390932311:web:65972faae23169e9b06e12"
  }),
    AngularFireAuthModule,
    AngularFireModule,
    FormsModule,
    NgOtpInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas :[CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AppModule { }
