import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FrontendService } from 'src/app/services/frontend.service';

@Component({
  selector: 'app-freelancer-gigs',
  templateUrl: './freelancer-gigs.component.html',
  styleUrls: ['./freelancer-gigs.component.css']
})
export class FreelancerGigsComponent {

gigs:any
  
  dataSource:any
  displayedColumns:string[]=["Title","Category","Subcategory","Description"]


@ViewChild(MatPaginator) paginator!:MatPaginator
@ViewChild(MatSort) sort!:MatSort


  constructor(private service:FrontendService){}

  ngOnInit(){
    this.getAllGigs()
  }

  getAllGigs(){
    const userId=localStorage.getItem('userId')
    this.service.getAllGigs(userId).subscribe((response)=>{
      this.gigs=response.gigData
      console.log(this.gigs)
      this.dataSource = new MatTableDataSource<any>(this.gigs)
      this.dataSource.paginator=this.paginator
      this.dataSource.sort=this.sort
    })
  }
}
