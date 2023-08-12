import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { freelancer } from 'src/app/helpers/interfaces/freelancer.interface';
import { FrontendService } from 'src/app/services/frontend.service';

@Component({
  selector: 'app-freelancers',
  templateUrl: './freelancers.component.html',
  styleUrls: ['./freelancers.component.css']
})
export class FreelancersComponent implements OnInit {

  freelancers!: freelancer[]


  dataSource:any
  displayedColumns:string[]=["Name","Freelancer Details"]

@ViewChild(MatPaginator) paginator!:MatPaginator
@ViewChild(MatSort) sort!:MatSort



  constructor(private service: FrontendService) { }

  ngOnInit() {
    this.getAllFreelancers()

  }


  getAllFreelancers() {
    this.service.getAllFreelancers().subscribe((response) => {
      this.freelancers = response.freelancers
      this.dataSource = new MatTableDataSource<any>(this.freelancers)
        this.dataSource.paginator=this.paginator
        this.dataSource.sort=this.sort
    })

  }

  freelancerApprove(id: string) {
    this.service.freelancerApprove({ userId: id }).subscribe((response) => {
      console.log(response)
    })
  }

  freelancerReject(id: string) {

    this.service.freelancerReject({ userId: id }).subscribe((response) => {
      console.log(response)
    })

  }

  
}
