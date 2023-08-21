import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gig-singlepage',
  templateUrl: './gig-singlepage.component.html',
  styleUrls: ['./gig-singlepage.component.css']
})
export class GigSinglepageComponent {

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      const id = history.state.id
      console.log(id)
    })

  }
}