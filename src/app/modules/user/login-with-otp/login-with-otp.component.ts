import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';
import { patterns } from 'src/app/helpers/regexPatterns';

import  firebase  from 'firebase/compat/app';
import "firebase/auth"
import "firebase/firestore"

import { AngularFireAuth } from '@angular/fire/compat/auth';
import {Router} from '@angular/router'


import { initializeApp } from 'firebase/app';
import { getAuth,signInWithPhoneNumber,RecaptchaVerifier } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';
import { FrontendService } from 'src/app/services/frontend.service';


var config={
  apiKey: "AIzaSyDUNRnhIgaSZWBLE0tIivtHs9wBNYkZlxA",

  authDomain: "skill-mingle-64304.firebaseapp.com",

  projectId: "skill-mingle-64304",

  storageBucket: "skill-mingle-64304.appspot.com",

  messagingSenderId: "273390932311",

  appId: "1:273390932311:web:65972faae23169e9b06e12"
}


@Component({
  selector: 'app-login-with-otp',
  templateUrl: './login-with-otp.component.html',
  styleUrls: ['./login-with-otp.component.css']
})
export class LoginWithOTPComponent implements OnInit{


  phoneNumber:any;
  reCaptchaVerifier :any;
  numberWithCountryCode:any
  submit:boolean=false
  isBlockedError:Boolean=false



  constructor(private fb:FormBuilder,
    private formBuilder: FormBuilder,
    private angularFireAuth: AngularFireAuth,
    private router: Router,private service:FrontendService){}

  ngOnInit() {firebase.initializeApp(config)}
  
  loginWithOTPForm=this.fb.group({
    mobileNumber:patterns.mobileNumber
  })


  onSubmit(){
    this.submit=true
    
    this.service.getUser(this.phoneNumber).subscribe((response)=>{
      if(response.userExistError)
      {
        console.log(response.userExistError)
      }
      else{
        if(response.user.isBlocked===true){
          this.isBlockedError=true
        }
        else{
        this.getOTP()
        }
      }
    })
  }

  getOTP(){
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button',{size:'invisible'})
      firebase.auth().signInWithPhoneNumber(`+91${this.phoneNumber}`,this.reCaptchaVerifier).then((confirmationResult)=>{
        
        localStorage.setItem('verificationId',JSON.stringify(confirmationResult.verificationId))
        this.router.navigate(['/verifyOTP',this.phoneNumber])
      }).catch((error)=>{
        alert(error.message)
        setTimeout(()=>{
          window.location.reload()
        },5000)
      })
  }
}
