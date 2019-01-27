import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { IEvent, ISession } from './shared';

@Component({
  // selector: 'event-details',
  templateUrl: './event-details.component.html',
  styles: [`
    .container{ padding:20px;}
    .event-image{ max-height:100px;}
    .rc { float:right; }
    .a{cursor:pointer;}
  `]
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  filterBy = 'all';
  addMode = false;
  sortBy = 'name';
  constructor(public eventService: EventService, public route: ActivatedRoute, private router: Router) { }

  ngOnInit () {
    this.route.data.forEach((data) => {
      this.event = data['event'];
      this.resetState();
    });
  }

  resetState () {
    this.addMode = false;
    this.filterBy = 'all';
    this.addMode = false;
    this.sortBy = 'name';
  }

  editEvent (event) {
    this.router.navigate(['events/edit', this.route.snapshot.params['id']]);
  }

  addSession () {
    this.addMode = true;
  }

  saveNewSession (session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }

  cancelAddSession () { 
    this.addMode = false;
  }

}
