import { Component } from '@angular/core';
import { FrontendService } from 'src/app/services/frontend.service';

@Component({
  selector: 'app-freelance-dashboard',
  templateUrl: './freelance-dashboard.component.html',
  styleUrls: ['./freelance-dashboard.component.css']
})
export class FreelanceDashboardComponent {
  userId!:string|null
  userData!:any
  constructor(private service:FrontendService){}

  ngOnInit(){
      this.userId=localStorage.getItem('userId')
      this.getUser(this.userId)
  }

  getUser(userId:any){
    this.service.getUserUsingId(userId).subscribe((response)=>{
     if(response.user){
      this.userData=response.user
      console.log(this.userData)
    }
     else{
      console.log(response)
     }
      
    })
  }
}
