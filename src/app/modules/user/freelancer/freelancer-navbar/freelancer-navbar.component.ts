import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FrontendService } from 'src/app/services/frontend.service';

@Component({
  selector: 'app-freelancer-navbar',
  templateUrl: './freelancer-navbar.component.html',
  styleUrls: ['./freelancer-navbar.component.css']
})
export class FreelancerNavbarComponent {

  userToken!:any
  userId!:any
  user:any=null
  showDropDownMenu:boolean=false

  constructor(private service:FrontendService,private router:Router){}

  ngOnInit(){
    this.userToken=localStorage.getItem('userToken')
    if(this.userToken)
    {
      this.userId=localStorage.getItem('userId')
      console.log(this.userId)
      this.getUser()
    }
}

getUser(){
  this.service.getUserUsingId(this.userId).subscribe((response)=>{
    if(response.user){
      
      this.user=response.user
    }
    else if(response.userExistError){
      console.log(response.userExistError)
    }
  })
}

logout(){
  localStorage.removeItem('userId')
  localStorage.removeItem('userToken')
  this.user=null
  this.router.navigate(['/dashboard'])

}

dropDown(){
  this.showDropDownMenu = !this.showDropDownMenu;
  
}


}
