import { Component, OnInit } from '@angular/core';
import { FormBuilder,ReactiveFormsModule,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { patterns } from 'src/app/helpers/regexPatterns';
import { FrontendService } from 'src/app/services/frontend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  emailError:boolean=false
  passwordError:boolean=false

  submit:boolean=false
  
  constructor(private fb:FormBuilder,private service:FrontendService,private router:Router ){}
  
  ngOnInit(){}

  loginForm=this.fb.group({
    email:patterns.email,
    password:patterns.password
  })

  onClick(){
    this.submit= true
    this.verifyLogin()
    console.log(this.loginForm.value)
  }

  verifyLogin(){
    this.service.loginAdmin(this.loginForm.value).subscribe((response)=>{
      if(response.emailError)
      {
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
      else if(response.token){
        localStorage.setItem('adminToken',response.token)
        localStorage.setItem('adminId',response.id)
        this.router.navigate(['/admin/dashboard'])
      }
    })
  }

}