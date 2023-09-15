import { Component } from '@angular/core';
import { FrontendService } from 'src/app/services/frontend.service';
import { FormBuilder, Validators } from '@angular/forms';
import { patterns } from 'src/app/helpers/regexPatterns';
import { user } from 'src/app/helpers/interfaces/user.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  submit:boolean=false
  userId!:string
  newAndConfirmPasswordError:boolean=false
  incorrectOldPassword:boolean=false
  
constructor(private service:FrontendService,
  private fb:FormBuilder,
  private router:Router){}

ngOnInit(){
this.userId= localStorage.getItem('userId') as string
}
 resetPassword = this.fb.group({
  oldPassword:['',Validators.required],
  newPassword:patterns.password,
  confirmPassword:patterns.password
 })


 changePassword(){
  this.submit=true
  if(this.resetPassword.value.newPassword==this.resetPassword.value.confirmPassword){
    console.log("yes")
    this.service.changePassword({userId:this.userId,...this.resetPassword.value}).subscribe((response:any)=>{
      if(response.passwordChange){
        this.router.navigate(['/userEdit'])
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Password changed.'
        })
      }
      else if(response.incorrectOldPassword)
      {
        this.incorrectOldPassword=true
      }

      console.log(response)
    })
  }else{
   this.newAndConfirmPasswordError=true
  }

 }
}
