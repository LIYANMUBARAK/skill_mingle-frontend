import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { freelancerAndUser } from '../../../../helpers/interfaces/freelancerAndUser.interface'
import { FrontendService } from 'src/app/services/frontend.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { message } from 'src/app/helpers/interfaces/message.interface';
 
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  freelancerAndUserId!: freelancerAndUser
  userId!: string
  freelancerId!: string
  allChat: any[]=[]
  allConnections:any[] = []

  constructor(private route: ActivatedRoute,
    private service: FrontendService,
    private fb: FormBuilder,
    private socket:Socket) { }

  ngOnInit() {
    this.getNewMessage().subscribe(()=>{
      this.formData.patchValue({
              message:''
            })
      this.getChat()
    }) 

    this.route.paramMap.subscribe(() => {
      this.freelancerAndUserId = history.state
      this.freelancerId = this.freelancerAndUserId.freelancerId
      // this.userId = this.freelancerAndUserId.userId
      this.userId = localStorage.getItem('userId') as string
      if(this.freelancerId)
      {
        this.getChat()
      }
 
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


 sendMessage(message:message):void{
  this.socket.emit('sendMessage',message)
 }


 getNewMessage():Observable<string>{
  return this.socket.fromEvent<string>('newMessage')
 }


 loadChat(freelancerId:string){
  this.freelancerId = freelancerId
  this.freelancerAndUserId = { userId: this.userId, freelancerId: this.freelancerId }
  this.service.getChatforUser(this.freelancerAndUserId).subscribe((response) => {
    console.log(response.chat)
    this.allChat = response.chat
  })
 }


  onSubmit() {

    const message = this.formData.value.message as string
   this.sendMessage({chat:message,senderId:this.userId,recieverId:this.freelancerId})

    // this.service.chatSend({ freelancerId: this.freelancerId, userId: this.userId, chatMessage: this.formData.value.message }).subscribe((response) => {
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

