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
  
    return this.http.post(`${this.apiUrl}/user/signup`,userData)
  }

  loginUser(userData:Object):Observable<any>{
    return this.http.post(`${this.apiUrl}/user/login`,userData)
  }

  getUser(phoneNumber:any):Observable<any>{
   
    return this.http.get(`${this.apiUrl}/user/getUser/${phoneNumber}`)
  }



  loginAdmin(adminData:Object):Observable<any>{
   
    return this.http.post(`${this.apiUrl}/admin/verifyLogin`,adminData)
  }

  addCategory(categoryData:Object):Observable<any>{
    return this.http.post(`${this.apiUrl}/admin/addCategory`,categoryData)
  }

  loadCategoriesAndSubcategories():Observable<any>{
    return this.http.get(`${this.apiUrl}/admin/loadCategoriesAndSubcategories`)
  }

  loadCategoriesAndSubcategoriesForUser():Observable<any>{
    return this.http.get(`${this.apiUrl}/user/loadCategoriesAndSubcategories`)
  }

  addSubcategory(subcategoryData:Object):Observable<any>{
    return this.http.post(`${this.apiUrl}/admin/addSubcategory`,subcategoryData)
  }

  editCategory(categoryData:Object):Observable<any>{
    return this.http.patch(`${this.apiUrl}/admin/editCategory`,categoryData)
  }

  deleteCategory(categoryData:string):Observable<any>{
    return this.http.delete(`${this.apiUrl}/admin/deleteCategory?id=${categoryData}`)
  }

  getUserUsingId(id:any):Observable<any>{
    
    return this.http.get(`${this.apiUrl}/user/getUserUsingId/${id}`)
  }

  getAllUsers():Observable<any>{
    return this.http.get(`${this.apiUrl}/admin/getAllUsers`)
  }

  blockUser(id:Object):Observable<any>{
    console.log(id)
    return this.http.patch(`${this.apiUrl}/admin/blockUser`,id)
  }
  
  unblockUser(id:Object):Observable<any>{
    console.log(id)
    return this.http.patch(`${this.apiUrl}/admin/unblockUser`,id)
  }

  freelancerApply(freelancerData:Object):Observable<any>{
    return this.http.post(`${this.apiUrl}/user/freelancerApply`,freelancerData)
  }

  getAllFreelancers():Observable<any>{
   
    return this.http.get(`${this.apiUrl}/admin/getAllFreelancers`)
  }

  freelancerApprove(id:Object):Observable<any>{
   
    return this.http.patch(`${this.apiUrl}/admin/freelancerApprove`,id)
  }

  freelancerReject(id:Object):Observable<any>{
    
    console.log(id)
    return this.http.patch(`${this.apiUrl}/admin/freelancerReject`,id)
  }

  getSubCategoryUsingId(id:string):Observable<any>{

    console.log(id)
    return this.http.get(`${this.apiUrl}/admin/getSubcategory/${id}`)
  }
 
  deleteSubCategoryUsingId(id:string):Observable<any>{
    console.log(id)
    return this.http.get(`${this.apiUrl}/admin/deleteSubcategory/${id}`)
  }
  
}


