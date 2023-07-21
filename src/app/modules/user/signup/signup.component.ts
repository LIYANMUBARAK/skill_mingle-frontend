import { Component } from '@angular/core';
import { FrontendService } from 'src/app/services/frontend.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private service:FrontendService,private fb:FormBuilder){}
  
    registerForm =this.fb.group({
      name:['',[Validators.required]],
      userName:['',[Validators.required]],
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$")]],
      cpassword:['',[Validators.required]],
      mobileNumber:[Validators.required],
      gender:[Validators.required],
      country:[Validators.required],
      city:[Validators.required],
      
    })

    onSubmit(){
      const {name,userName,email,password,cpassword,mobileNumber,gender,country,city}=this.registerForm.value
      if(password==cpassword){
      this.registerUser()
      }
    }
    registerUser(){
      this.service.registerUser(this.registerUser.value).subscribe(
        (response)=>{
        
        }
      )
    }
}
