import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared';

@Component({
  // selector: 'event-details',
  templateUrl: './event-details.component.html',
  styles: [`
    .container{ padding:20px;}
    .event-image{ max-height:100px;}
  `]
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  constructor(public eventService: EventService, public route: ActivatedRoute) { }
  ngOnInit() {
    let id = parseInt(this.route.snapshot.params['id']);
    this.event = this.eventService.getEvent(id); 
  }

}