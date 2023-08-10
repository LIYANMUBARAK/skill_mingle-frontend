import { Component } from '@angular/core';
import { FrontendService } from 'src/app/services/frontend.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  dropDown:Boolean=false
  user:any

  constructor(private service:FrontendService){}

  ngOnInit(){
    this.getUser()
  }

  getUser(){
    const userId=localStorage.getItem('userId')
    const userToken = localStorage.getItem('userToken')
    this.service.getUserUsingId(userId).subscribe((response)=>{
        this.user=response.user
        const dateStr = response.user.dateOfJoin;
const date = new Date(dateStr);

// Get the month name
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const monthName = monthNames[date.getMonth()];

// Get the year
const year = date.getFullYear();

// Form the desired format
const formattedDate = `${monthName} ${year}`;
this.user.dateOfJoin=formattedDate
    })
  }

  toggleDropdown(){
    console.log(this.dropDown)
    this.dropDown=!this.dropDown
  }
  
}
