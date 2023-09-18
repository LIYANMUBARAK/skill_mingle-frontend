import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { API_URL } from '../helpers/apiUrl';
import { freelancerAndUser } from '../helpers/interfaces/freelancerAndUser.interface';
import { Order } from '../helpers/interfaces/orderData.interface';

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
    console.log(categoryData)
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

  emailExist(email:string):Observable<any>{
    console.log(email)
    return this.http.get(`${this.apiUrl}/user/emailExist/${email}`)
  }
  
  
  editUser(formData:Object):Observable<any>{
    console.log(formData)
    return this.http.patch(`${this.apiUrl}/user/editUser`,formData)
  }

  sendPasswordResetEmail(email:string|null|undefined):Observable<any>{

    return this.http.get(`${this.apiUrl}/user/sendPasswordResetEmail/${email}`)
  }

  chat(id:object):Observable<any>{
    return this.http.post(`${this.apiUrl}/user/chatConnect`,id)
  }

  getChatforUser(freelancerAndUserId:freelancerAndUser):Observable<any>{
    return this.http.post(`${this.apiUrl}/user/getChatforUser`,freelancerAndUserId)
  }

  chatSend(chat:object):Observable<any>{
    return this.http.post(`${this.apiUrl}/user/chatSend`,chat)
  }

  getConnections(userId:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/user/getConnections/${userId}`)
  }

  getConnectionsForFreelancer(freelancerId:string|null):Observable<any>{
        return this.http.get(`${this.apiUrl}/user/getConnectionsForFreelancer/${freelancerId}`)
  }

  getGigOfCategory(categoryName:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/user/getGigOfCategory/${categoryName}`)
  }

  orderSave(orderData:object):Observable<object>{
    console.log(orderData)
    return this.http.post(`${this.apiUrl}/user/orderSave`,orderData)
  }

  getSubcategoriesOfCategory(categoryName:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/user/getSubcategories/${categoryName}`)
  }

  getAllOrdersForUser(userId:string):Observable<Order[]>{
    return this.http.get<Order[]>(`${this.apiUrl}/user/getAllOrdersForUser/${userId}`)
  }

  getAllOrders():Observable<Order[]>{
    return this.http.get<Order[]>(`${this.apiUrl}/admin/getAllOrders`)
  }

  getAllOrdersForFreelancer(freelancerId:string):Observable<Order[]>{
    return this.http.get<Order[]>(`${this.apiUrl}/user/getAllOrdersForFreelancer/${freelancerId}`)
  }

  getOrderById(orderId:string):Observable<Order>{
    return this.http.get<Order>(`${this.apiUrl}/user/getOrderById/${orderId}`)
  }

  sendRevision(workDetails:object){
    console.log(workDetails);
    return this.http.post(`${this.apiUrl}/user/sendWork`,workDetails)
  }

  reviseWork(reviseDetails:object){
    return this.http.post(`${this.apiUrl}/user/sendRevision`,reviseDetails)
  }

  completeOrder(orderId:object){
    return this.http.post(`${this.apiUrl}/user/completeOrder`,orderId)
  }

  addReview(reviewDetails:object){
    return this.http.post(`${this.apiUrl}/user/addReview`,reviewDetails)
  }

  changePassword(passwords:object){
    return this.http.post(`${this.apiUrl}/user/changePassword`,passwords)
  }
}


