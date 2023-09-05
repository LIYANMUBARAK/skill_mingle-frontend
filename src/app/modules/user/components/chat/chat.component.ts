import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { freelancerAndUser } from '../../../../helpers/interfaces/freelancerAndUser.interface'
import { FrontendService } from 'src/app/services/frontend.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  freelancerAndUserId!: freelancerAndUser
  userId!: string
  freelancerId!: string
  allChat!: any[]
  allConnections:any

  constructor(private route: ActivatedRoute,
    private service: FrontendService,
    private fb: FormBuilder) { }

  ngOnInit() {

    this.route.paramMap.subscribe(() => {
      this.freelancerAndUserId = history.state
      console.log(this.freelancerAndUserId)
      this.freelancerId = this.freelancerAndUserId.freelancerId
      this.userId = this.freelancerAndUserId.userId
      this.getChat()
      this.getConnections()
    })
  }

  formData = this.fb.group({
    message: ['', [Validators.required]]
  })

  getChat() {
    this.service.getChatforUser(this.freelancerAndUserId).subscribe((response) => {
      console.log(response.chat)
      this.allChat = response.chat
    })
  }

  getConnections(){
    this.service.getConnections(this.userId).subscribe((response)=>{
      this.allConnections=response.connections
      console.log(this.allConnections)
    })
  }


  onSubmit() {
    this.service.chatSend({ freelancerId: this.freelancerId, userId: this.userId, chatMessage: this.formData.value.message }).subscribe((response) => {
      if (response.chatSend === true) {
        this.formData.patchValue({
          message:''
        })
        this.getChat()
      }
    }

    )
  }

}

