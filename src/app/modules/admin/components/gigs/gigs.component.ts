import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FrontendService } from 'src/app/services/frontend.service';

@Component({
  selector: 'app-gigs',
  templateUrl: './gigs.component.html',
  styleUrls: ['./gigs.component.css']
})
export class GigsComponent {

  gigs!:any

  dataSource:any
  displayedColumns:string[]=["Title","Category","Subcategory","Description"]

@ViewChild(MatPaginator) paginator!:MatPaginator
@ViewChild(MatSort) sort!:MatSort



  constructor(private service:FrontendService){}

ngOnInit(){
  this.getAllgigs()
}

getAllgigs(){
  this.service.getAllGigsInAdmin().subscribe((response:any)=>{
    this.gigs=response.gigs
    this.dataSource = new MatTableDataSource<any>(response.gigs)
    this.dataSource.paginator=this.paginator
    this.dataSource.sort=this.sort
  })
}

}
