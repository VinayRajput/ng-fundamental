import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from './event-details/shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './event-details/shared';
import { Toastr, TOKEN_TOASTR } from '../common';

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
  events: IEvent[];
  constructor(public eventService: EventService, public route: ActivatedRoute, @Inject(TOKEN_TOASTR) private toastr: Toastr) {
  }

  handleClick (ev) {
    this.toastr.success(ev.name + ' clicked');
  }

  ngOnInit () {
    //this.eventService.getEvents().subscribe(events => { this.events = events };
    this.events = this.route.snapshot.data['events'];
  }
}
