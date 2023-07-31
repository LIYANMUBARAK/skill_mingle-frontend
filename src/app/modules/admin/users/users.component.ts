import { Component } from '@angular/core';
import { FrontendService } from 'src/app/services/frontend.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users!:any

  constructor(private service:FrontendService){}

  ngOnInit(){
    this.getAllUsers()
  }

  getAllUsers(){
    this.service.getAllUsers().subscribe((response)=>{
      this.users=response.users
    })
  }
  blockUser(id:any){
    
    this.service.blockUser({userId:id}).subscribe((response)=>{
      this.getAllUsers()
    })
  }

  unblockUser(id:any){
    
    this.service.unblockUser({userId:id}).subscribe((response)=>{
      this.getAllUsers()
    })
  }
}
