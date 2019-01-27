import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './event-details/shared/event.service';
@Injectable({
   providedIn: 'root'
})
export class EventResovler implements Resolve<any> {
   constructor(private eventService: EventService) { }

   resolve (route: ActivatedRouteSnapshot) {
      return this.eventService.getEvent(route.params['id']);
   }
}
