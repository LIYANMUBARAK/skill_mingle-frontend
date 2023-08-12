import { Component,ViewChild } from '@angular/core';
import { FrontendService } from 'src/app/services/frontend.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

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
    
    this.service.blockUser({userId:id}).subscribe((response)=>{
      this.getAllUsers()
    })
  }

  unblockUser(id:any){
    
    this.service.unblockUser({userId:id}).subscribe((response)=>{
      this.getAllUsers()
    })
  }
}
