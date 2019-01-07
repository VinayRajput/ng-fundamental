import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators';
import { IEvent } from './shared';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventListResovlerService implements Resolve<any> {

  resolve():Observable<IEvent[]> {
    return this.eventService.getEvents().pipe(map(events => events))
  }
  constructor(private eventService: EventService) { }
}
