import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { freelancerAndUser } from '../../../../helpers/interfaces/freelancerAndUser.interface'
import { FrontendService } from 'src/app/services/frontend.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  freelancerAndUserId!:freelancerAndUser
  userId!:string
  freelancerId!:string
  allChat!:any[]

  constructor(private route:ActivatedRoute,private service:FrontendService){}

  ngOnInit() {

    this.route.paramMap.subscribe(() => {
      this.freelancerAndUserId = history.state
      console.log(this.freelancerAndUserId)
      this.freelancerId = this.freelancerAndUserId.freelancerId
      this.userId = this.freelancerAndUserId.userId
      this.getChat()
    })
  }

  getChat(){
      this.service.getChatforUser(this.freelancerAndUserId).subscribe((response)=>{
        console.log(response.chat)
        this.allChat=response.chat
      })
  }

  
}

