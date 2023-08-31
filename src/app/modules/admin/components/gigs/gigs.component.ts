import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FrontendService } from 'src/app/services/frontend.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gigs',
  templateUrl: './gigs.component.html',
  styleUrls: ['./gigs.component.css']
})
export class GigsComponent {

  gigs!:any

  dataSource:any
  displayedColumns:string[]=["Title","Category","Subcategory","Description","Delete"]

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

deleteGig(id:string){

  Swal.fire({
    title: 'Do you want to delete the gig?',
    
    showCancelButton: true,
    confirmButtonText: 'Delete',
    
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this.service.deleteGig(id).subscribe((response)=>{
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
          title: 'Gig deleted'
        })
      if(response.deleteGig===true){
        this.getAllgigs()
      }
    })

    }
  })


 
}

}
