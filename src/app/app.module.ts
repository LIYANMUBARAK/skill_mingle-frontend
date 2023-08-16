import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserModule } from './modules/user/user.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


//Firebase and environment modules

import { AngularFireAuthModule } from '@angular/fire/compat/auth'

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule  } from '@angular/fire/compat/storage';
// OTP module

import { NgOtpInputModule } from  'ng-otp-input';


import { AuthInterceptor } from './helpers/interceptors/auth.interceptor';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
    AngularFireStorageModule,
    FormsModule,
    NgOtpInputModule,
    FontAwesomeModule
],
  providers: [  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  schemas :[CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AppModule { }
