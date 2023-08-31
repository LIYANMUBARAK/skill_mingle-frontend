import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FrontendService } from 'src/app/services/frontend.service';
import firebase from 'firebase/compat/app';
import "firebase/auth"
import "firebase/firestore"
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';




var config={
  apiKey: "AIzaSyDUNRnhIgaSZWBLE0tIivtHs9wBNYkZlxA",

  authDomain: "skill-mingle-64304.firebaseapp.com",

  projectId: "skill-mingle-64304",

  storageBucket: "skill-mingle-64304.appspot.com",

  messagingSenderId: "273390932311",

  appId: "1:273390932311:web:65972faae23169e9b06e12"
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  submit: boolean = false;
  emailError: boolean = false
  email!: string|null|undefined


  constructor(private fb: FormBuilder, private service: FrontendService, private fireauth: AngularFireAuth, private router: Router,
    private http:HttpClient ) { }
  emailForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });


  sendLink() {
    this.submit = true

    // if(this.emailForm.value.email!=null||undefined)
    // {
    //  
    // }
    this.email = this.emailForm.value.email

    this.service.sendPasswordResetEmail(this.email).subscribe()
  }


  sendEmailForVerification(user: any) {
    user.sendEmailForVerification().then((response: any) => {
      this.router.navigate(['/verifyEmail'])
    }, (err: any) => {
      alert('Something went wrong,Not able to send mail.')
    })
  }
}
