import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { API_URL } from '../helpers/apiUrl';

@Injectable({
  providedIn: 'root'
})
export class FrontendService {
  
  

  private apiUrl:string=API_URL

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

  editSubcategory(subcategoryData:Object){
    return this.http.patch(`${this.apiUrl}/admin/editSubcategory`,subcategoryData)
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
    
    return this.http.patch(`${this.apiUrl}/admin/freelancerReject`,id)
  }

  getSubCategoryUsingId(id:string):Observable<any>{

    return this.http.get(`${this.apiUrl}/admin/getSubcategory/${id}`)
  }
 
  deleteSubCategoryUsingId(id:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/admin/deleteSubcategory/${id}`)
  }

  gigUpload(gigData:Object):Observable<any>{
    return this.http.post(`${this.apiUrl}/user/addGig`,gigData)
  }
  
  getAllGigs(freelancerId:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/user/getAllGigs/${freelancerId}`)
  }

  getAllGigsInAdmin():Observable<any>{
    return this.http.get(`${this.apiUrl}/admin/getAllGigs`)
  }

    getAllCategories():Observable<any>{
    return this.http.get(`${this.apiUrl}/user/getAllCategories`)
  }

  getSubcategoriesofCategory(categoryId:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/user/getSubcategoriesofCategory/${categoryId}`)
  }

  getGigs():Observable<any>{
    return this.http.get(`${this.apiUrl}/user/getGigs`)
  }

  deleteGig(id:string):Observable<any>{
    return this.http.delete(`${this.apiUrl}/user/deleteGig?id=${id}`)
  }

  getGig(id:string):Observable<any>{

    return this.http.get(`${this.apiUrl}/user/getGig/${id}`)
  }
}


