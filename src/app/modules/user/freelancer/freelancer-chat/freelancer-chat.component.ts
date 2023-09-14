import { Component } from '@angular/core';
import { FrontendService } from 'src/app/services/frontend.service';
import { FormBuilder, Validators } from '@angular/forms';
import { freelancerAndUser } from 'src/app/helpers/interfaces/freelancerAndUser.interface';
import { message } from 'src/app/helpers/interfaces/message.interface';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-freelancer-chat',
  templateUrl: './freelancer-chat.component.html',
  styleUrls: ['./freelancer-chat.component.css']
})
export class FreelancerChatComponent {

  userData!: any
  allConnections: any
  allChat: any[] = []
  freelancerAndUserId!: freelancerAndUser
  userId!: string
   readonly freelancerId = localStorage.getItem('userId') as string


  constructor(private service: FrontendService,
    private fb: FormBuilder,
    private socket: Socket,
    
    ) { }

  ngOnInit() {
    this.getUser(this.freelancerId)
    this.getConnectionsForFreelancer()

    this.getNewMessage().subscribe(()=>{
      this.formData.patchValue({
              message:''
            })
            this.loadUserChat(this.userId)
    })
  }


  formData = this.fb.group({
    message: ['', [Validators.required]]
  })

  loadUserChat(userId: string) {
    this.userId = userId
    this.freelancerAndUserId = { userId: this.freelancerId, freelancerId: userId }
    this.service.getChatforUser(this.freelancerAndUserId).subscribe((response) => {
      console.log(response.chat)
      this.allChat = response.chat
    })
  }

  getUser(userId: any) {
    this.service.getUserUsingId(this.freelancerId).subscribe((response) => {
      if (response.user) {
        this.userData = response.user
        console.log(this.userData)
      }
      else {
        console.log(response)
      }

    })
  }

  getConnectionsForFreelancer() {

    this.service.getConnectionsForFreelancer(this.freelancerId).subscribe((response) => {
      this.allConnections = response.connections
      console.log(this.allConnections)
    })
  }

  sendMessage(message: message): void {
    this.socket.emit('sendMessage', message)
  }


  getNewMessage(): Observable<string> {
    return this.socket.fromEvent<string>('newMessage')
  }


  onSubmit() {
    const chat = this.formData.value.message as string
    const message =( { chat:chat ,senderId:this.freelancerId,recieverId:this.userId})
    this.sendMessage(message)



    // this.service.chatSend({ freelancerId: this.freelancerId, userId: this.freelancerId, chatMessage: this.formData.value.message }).subscribe((response) => {
    //   if (response.chatSend === true) {
    //     this.formData.patchValue({
    //       message:''
    //     })
    //     this.getChat()
    //   }
    // }

    // )
  }

}
