import { Component, OnInit } from '@angular/core';

import  firebase  from 'firebase/compat/app';
import "firebase/auth"
import "firebase/firestore"

import { AngularFireAuth } from '@angular/fire/compat/auth';
import {Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { FrontendService } from 'src/app/services/frontend.service';


@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOTPComponent implements OnInit{

  constructor(private router:Router,private route:ActivatedRoute,private service:FrontendService){}

  otp!:string
  verify:any
  phoneNumber:any
  

  ngOnInit(): void {
    this.verify = JSON.parse(localStorage.getItem('verificationId')||'{}')
    console.log(this.verify)
    this.phoneNumber=this.route.snapshot.paramMap.get('phoneNumber')
    console.log(this.phoneNumber)
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

  createToken(){
   
  }

  handleClick(){
    var credentials = firebase.auth.PhoneAuthProvider.credential(this.verify,this.otp)
    firebase.auth().signInWithCredential(credentials).then((response)=>{
      this.service.getUser(this.phoneNumber).subscribe((response)=>{
        if(response.userExistError)
        {
          console.log(response.userExistError)
        }
        else if(response.token){
          console.log(response)
          localStorage.setItem('userToken',response.token)
          localStorage.setItem('userId',response.id)
          this.router.navigate(['/dashboard'])
        }
      })
    }).catch((error)=>{
      alert(error.message);
     })
    }
  }



