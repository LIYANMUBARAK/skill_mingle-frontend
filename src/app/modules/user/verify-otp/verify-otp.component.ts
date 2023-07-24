import { Component, OnInit } from '@angular/core';

import  firebase  from 'firebase/compat/app';
import "firebase/auth"
import "firebase/firestore"

import { AngularFireAuth } from '@angular/fire/compat/auth';
import {Router} from '@angular/router'




@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOTPComponent implements OnInit{

  constructor(private router:Router){}

  otp!:string
  verify:any


  ngOnInit(): void {
    this.verify = JSON.parse(localStorage.getItem('verificationId')||'{}')
    console.log(this.verify)
  }

  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '50px',
      height: '50px',
    },
  };

  onOtpChange(otpCode:any){
      this.otp=otpCode;
      console.log(this.otp)
  }

  handleClick(){
    var credentials = firebase.auth.PhoneAuthProvider.credential(this.verify,this.otp)
    firebase.auth().signInWithCredential(credentials).then((response)=>{
     this.router.navigate(['/dashboard'])
    }).catch((error)=>{
      alert(error.message);
     })
    }
  }



