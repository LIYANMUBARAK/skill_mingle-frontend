import { Component} from '@angular/core';
import { FrontendService } from 'src/app/services/frontend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

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
      console.log(response.user)
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


