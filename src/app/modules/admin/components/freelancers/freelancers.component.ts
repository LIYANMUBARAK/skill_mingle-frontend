import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { freelancer } from 'src/app/helpers/interfaces/freelancer.interface';
import { FrontendService } from 'src/app/services/frontend.service';
import Swal from 'sweetalert2';
import { FreelancerMoreInfoComponent } from '../freelancer-more-info/freelancer-more-info.component';

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



  constructor(private service: FrontendService,
    private dialog: MatDialog) { }

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
        title: 'Freelancer approved'
      })
    })
    this.getAllFreelancers()  
  }

  freelancerReject(id: string) {
    Swal.fire({
      title: 'Do you want to reject the freelancer request??',
      
      showCancelButton: true,
      confirmButtonText: 'Reject',
      
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        this.service.freelancerReject({ userId: id }).subscribe((response) => {
          this.getAllFreelancers()
        })
      }
    })
    

  }

  openMoreInfoModal(freelancerId:string){
    this.dialog.open(FreelancerMoreInfoComponent,{
      data:{
        userId:freelancerId
    }
  }).afterClosed().subscribe(()=>{

    })
  }

  
}
