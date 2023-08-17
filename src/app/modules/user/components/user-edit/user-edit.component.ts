import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { fetchUserAPI } from '../user-store/user.action';

import { Observable } from 'rxjs';
import { userSelectorData } from '../user-store/user.selector';
import { User } from '../user-store/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {

  user$:any

  constructor(private store:Store){}

  ngOnInit(): void {
    this.store.dispatch(fetchUserAPI())
    this.user$ = this.store.pipe(select(userSelectorData))
    this.user$.subscribe((data:User) => {
      console.log(data)
      
    
    })
  }
}
