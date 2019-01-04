import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

//declare let toastr;

@Component({
  selector: 'events-list',
  template: `
  <div><h1>Upcoming Angular Events</h1></div>
    <div class="well thumbnail ">
    <div class="row">
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" *ngFor="let event of events">
      <event-thumbnail [event]="event" (click)="handleClick(event)" (childEvent)="eventFromChild($event)"></event-thumbnail>  
      </div>
    </div>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  events: any;
  toastr: any;
  constructor(public eventService: EventService, public toastrService: ToastrService, public route:ActivatedRoute) {
  }

  handleClick(ev) {
    this.toastr.success(ev.name + ' clicked');
  }

  ngOnInit() {
    this.toastr = this.toastrService.getToasterObj();
    //this.eventService.getEvents().subscribe(events => { this.events = events };
    this.events = this.route.snapshot.data['events'];
  }
}
