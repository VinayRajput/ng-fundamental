import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './event-details/shared/event.service';
import { map } from 'rxjs/operators';
import { IEvent } from './event-details/shared';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventListResovlerService implements Resolve<any> {

  resolve () {
    return this.eventService.getEvents();
  }
  constructor(private eventService: EventService) { }
}
