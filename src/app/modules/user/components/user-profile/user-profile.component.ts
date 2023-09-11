import { Component } from '@angular/core';
import { FrontendService } from 'src/app/services/frontend.service';
import { Store, select } from '@ngrx/store';

import { fetchUserAPI } from '../user-store/user.action';
import { userSelectorData } from '../user-store/user.selector';
import { User } from '../user-store/user';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  dropDown: Boolean = false
  user$!: Observable<User|null>
  

  constructor(private service: FrontendService,private store:Store) { }

  ngOnInit() {

    this.getUser()
  }

  getUser() {
    //     const userId=localStorage.getItem('userId')
    //     const userToken = localStorage.getItem('userToken')
    //     this.service.getUserUsingId(userId).subscribe((response)=>{
    //         this.user=response.user


    this.store.dispatch(fetchUserAPI())
    this.user$ = this.store.pipe(select(userSelectorData))
    this.user$.subscribe((data: any) => {
     


    })


  }


  toggleDropdown() {
   
    this.dropDown = !this.dropDown
  }

}
