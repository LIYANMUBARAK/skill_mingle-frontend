import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FrontendService } from 'src/app/services/frontend.service';


@Injectable({
  providedIn:'root'
})


export class UserAuthGuard implements CanActivate  {
  access:boolean=true
  constructor(private router:Router,private service:FrontendService){
  const token = localStorage.getItem('userToken')
  if(token){
    const id=localStorage.getItem('userId')
    this.service.getUserUsingId(id).subscribe((response)=>{
      if(response.user.isBlocked===true){
        localStorage.removeItem('userId')
        localStorage.removeItem('userToken')
        this.access=false
      }
      else{
        this.access=true
      }
    })
  }
}

  canActivate(): boolean {
    
 const isAuthenticated = localStorage.getItem('userToken')
if(isAuthenticated)
{
  if(this.access){
  return true
  }else{
    this.router.navigate(['/login'])
    return false

  }
}
    else{
     return true
    }
 
};
}