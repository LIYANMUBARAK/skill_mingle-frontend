import { Component } from '@angular/core';
import { FrontendService } from 'src/app/services/frontend.service';
import { FormBuilder, Validators } from '@angular/forms';
import { freelancerAndUser } from 'src/app/helpers/interfaces/freelancerAndUser.interface';

@Component({
  selector: 'app-freelancer-chat',
  templateUrl: './freelancer-chat.component.html',
  styleUrls: ['./freelancer-chat.component.css']
})
export class FreelancerChatComponent {

  freelancerId!:string
  userData!:any
  allConnections:any
  allChat!: any[] 
  freelancerAndUserId!:freelancerAndUser
  userId!:string

constructor(private service:FrontendService,
  private fb:FormBuilder){}

  ngOnInit(){
    this.freelancerId=localStorage.getItem('userId') as string
    this.getUser(this.freelancerId)
    this.getConnectionsForFreelancer()
}


formData = this.fb.group({
  message: ['', [Validators.required]]
})

loadUserChat(userId:string){
  this.userId=userId
  this.freelancerAndUserId={userId:this.freelancerId,freelancerId:userId}
  this.service.getChatforUser(this.freelancerAndUserId).subscribe((response) => {
    console.log(response.chat)
    this.allChat = response.chat
  })
}

getUser(userId:any){
  this.service.getUserUsingId(this.freelancerId).subscribe((response)=>{
   if(response.user){
    this.userData=response.user
    console.log(this.userData)
  }
   else{
    console.log(response)
   }
    
  })
}

getConnectionsForFreelancer(){
 
    this.service.getConnectionsForFreelancer(this.freelancerId).subscribe((response)=>{
   this.allConnections=response.connections
   console.log(this.allConnections)
    })
  }

  onSubmit() {
    this.service.chatSend({ freelancerId: this.freelancerId, userId: this.freelancerId, chatMessage: this.formData.value.message }).subscribe((response) => {
      if (response.chatSend === true) {
        // this.formData.patchValue({
        //   message:''
        // })
        // this.getChat()
      }
    }

    )
  }

}
