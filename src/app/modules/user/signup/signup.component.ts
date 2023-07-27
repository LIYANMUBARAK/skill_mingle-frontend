import { Component ,OnInit } from '@angular/core';
import { FrontendService } from 'src/app/services/frontend.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


import  firebase  from 'firebase/compat/app';
import "firebase/auth"
import "firebase/firestore"

import { AngularFireAuth } from '@angular/fire/compat/auth';
import {Router} from '@angular/router'


import { initializeApp } from 'firebase/app';
import { getAuth,signInWithPhoneNumber,RecaptchaVerifier } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';

var config={
  apiKey: "AIzaSyDUNRnhIgaSZWBLE0tIivtHs9wBNYkZlxA",

  authDomain: "skill-mingle-64304.firebaseapp.com",

  projectId: "skill-mingle-64304",

  storageBucket: "skill-mingle-64304.appspot.com",

  messagingSenderId: "273390932311",

  appId: "1:273390932311:web:65972faae23169e9b06e12"
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit{

  phoneNumber:any;
  reCaptchaVerifier :any;

submit:boolean=false

  formControls!:{[key:string]:AbstractControl}

  constructor(private service:FrontendService,private fb:FormBuilder,  private frontendService: FrontendService,
    private formBuilder: FormBuilder,
    private angularFireAuth: AngularFireAuth,
    private router: Router){}
  
 ngOnInit() {
  firebase.initializeApp(config)
 }

  registerForm =this.fb.group({
  name:['',[Validators.required]],
  userName:['',[Validators.required]],
  email:['',[Validators.email,Validators.required]],
  password:['',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$")]],
  cpassword:['',[Validators.required]],
  mobileNumber:['',Validators.required,Validators.pattern('^[0-9]{10}$')],
  gender:['',Validators.required],
  country:['',Validators.required],
  city:['',Validators.required],

  })

    onSubmit(){
      this.submit=true
      
      const {name,userName,email,password,cpassword,mobileNumber,gender,country,city}=this.registerForm.value
      if(password==cpassword){
      this.registerUser()
      }
      else{
        console.log("password not correct")
      }
    }
    registerUser(){
      this.service.registerUser(this.registerForm.value).subscribe((response)=>{
        console.log(response.userSave)
        if(response.userSave==true){
          this.getOTP()
        }
        else{
        
          console.log("error")
        }
      })
    }

    getOTP(){
      this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button',{size:'invisible'})
      firebase.auth().signInWithPhoneNumber(this.phoneNumber,this.reCaptchaVerifier).then((confirmationResult)=>{
        
        localStorage.setItem('verificationId',JSON.stringify(confirmationResult.verificationId))
        this.router.navigate([`/verifyOTP?id=${this.phoneNumber}`])
      }).catch((error)=>{
        alert(error.message)
        setTimeout(()=>{
          window.location.reload()
        },5000)
      })
    }
 
    

  }
