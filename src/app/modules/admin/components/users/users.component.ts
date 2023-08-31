import { Component,ViewChild } from '@angular/core';
import { FrontendService } from 'src/app/services/frontend.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users!:any

  dataSource:any
  displayedColumns:string[]=["Name","User Name","Email","blockAndUnblock"]

@ViewChild(MatPaginator) paginator!:MatPaginator
@ViewChild(MatSort) sort!:MatSort

  constructor(private service:FrontendService){}

  ngOnInit(){
    this.getAllUsers()
  }

  getAllUsers(){
    this.service.getAllUsers().subscribe((response)=>{
      this.users=response.users
      this.dataSource = new MatTableDataSource<any>(this.users)
      this.dataSource.paginator=this.paginator
      this.dataSource.sort=this.sort
    })
  }
  blockUser(id:any){
    Swal.fire({
      title: 'Do you want to block the user?',
      
      showCancelButton: true,
      confirmButtonText: 'Block',
      
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
      

        this.service.blockUser({userId:id}).subscribe((response)=>{
         
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'User blocked'
          })
          this.getAllUsers()
        })
      } 
    })
    
    
  }

  unblockUser(id:any){
    Swal.fire({
      title: 'Do you want to unblock the user?',
      
      showCancelButton: true,
      confirmButtonText: 'Unblock',
      
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        
    this.service.unblockUser({userId:id}).subscribe((response)=>{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'User unblocked'
      })
      this.getAllUsers()
    })
      }
    })
  
  }
}
