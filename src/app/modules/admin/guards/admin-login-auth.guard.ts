import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class AdminLoginAuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(): boolean {
    const isAuthenticated = localStorage.getItem('adminToken')
    if (isAuthenticated) {
      this.router.navigate(['/dashboard'])
      return false
    }
    else {
     
      
      return true
      
    }

  };
}