import { Component,OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { patterns } from 'src/app/helpers/regexPatterns';
import { Router } from '@angular/router';
import { FrontendService } from 'src/app/services/frontend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  passwordError:Boolean=false
  emailError:Boolean=false
  isBlockedError:Boolean=false

  submit:boolean=false
  
  constructor(private fb:FormBuilder,private router:Router,private service:FrontendService){}

  ngOnInit() {}

  loginForm=this.fb.group({
    email:patterns.email,
    password:patterns.password
  })

  onSubmit(){
    this.submit=true
    console.log(this.loginForm.value)
   this.verifyUser()
  }

  verifyUser(){
    this.service.loginUser(this.loginForm.value).subscribe((response)=>{
      
      if(response.token){

        localStorage.setItem('userToken',response.token)
        localStorage.setItem('userId',response.id)
        this.router.navigate(['/dashboard'])
      }
      else if(response.emailError){
      this.emailError=true
      setTimeout(()=>{
        this.emailError=false
      },3000)
      }
      else if(response.passwordError){
        this.passwordError=true
        setTimeout(()=>{
          this.passwordError=false
        },3000)
      }
      else if(response.isBlockedError){
        this.isBlockedError=true
      }
      else{
        console.log("error")
      }
    })
  }
}
