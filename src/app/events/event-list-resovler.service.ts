import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EventListResovlerService implements Resolve {

  resolve(){
    return this.eventService.getEvents().pipe(map(events => events))
  }
  constructor(private eventService:EventService) { }
}
