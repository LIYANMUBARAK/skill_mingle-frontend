import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FrontendService {
  
  private apiUrl:string='http://localhost:3000';

  constructor(private http:HttpClient) { }

  registerUser(userData:Object):Observable<any>{
    return this.http.post(`${this.apiUrl}/user/register`,userData)
  }
}
