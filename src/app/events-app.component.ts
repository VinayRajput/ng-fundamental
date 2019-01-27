import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'events-app',
  template: `
  <app-navbar></app-navbar>
<div class="container">
<router-outlet></router-outlet>
<!-- <events-list #eventList></events-list>   -->
</div>
`,
})
export class EventsAppComponent implements OnInit{
  constructor(private auth: AuthService) {
  }

  ngOnInit(){
    this.auth.checkAthenticatedStatus();
  }

}
