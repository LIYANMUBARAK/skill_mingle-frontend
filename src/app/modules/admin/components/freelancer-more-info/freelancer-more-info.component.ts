import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
import { gig } from 'src/app/helpers/interfaces/gig.interface';
import { gigOrder } from 'src/app/helpers/interfaces/gigOrder.interface';
import { user } from 'src/app/helpers/interfaces/user.interface';
import { FrontendService } from 'src/app/services/frontend.service';

@Component({
  selector: 'app-freelancer-more-info',
  templateUrl: './freelancer-more-info.component.html',
  styleUrls: ['./freelancer-more-info.component.css']
})
export class FreelancerMoreInfoComponent {

  freelancerId!:string
  freelancerData!:user

  constructor(@Inject(MAT_DIALOG_DATA) public data: {freelancerId:string},
    private router: Router,
    private dialogRef: MatDialogRef<FreelancerMoreInfoComponent>,
    private service: FrontendService
  ) { }


  ngOnInit() {
    console.log(this.data)
    this.freelancerId=this.data.freelancerId as string
    this.getFreelancerData()
  }

  getFreelancerData(){
this.service.getUserUsingId(this.freelancerId).subscribe((response)=>{
  this.freelancerData=response.user
  console.log(response)
})
  }

  closeModal() {
    this.dialogRef.close()
  }
}
