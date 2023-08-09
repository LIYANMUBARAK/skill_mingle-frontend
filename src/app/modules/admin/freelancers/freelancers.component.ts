import { Component,OnInit } from '@angular/core';
import { freelancer } from 'src/app/helpers/interfaces/freelancer.interface';
import { FrontendService } from 'src/app/services/frontend.service';

@Component({
  selector: 'app-freelancers',
  templateUrl: './freelancers.component.html',
  styleUrls: ['./freelancers.component.css']
})
export class FreelancersComponent implements OnInit {

  freelancers!:freelancer[]


  constructor(private service:FrontendService){}

  ngOnInit(){
    this.getAllFreelancers()

  }


  getAllFreelancers(){
    this.service.getAllFreelancers().subscribe((response)=>{
      this.freelancers=response.freelancers
    })
  }
}
