import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventService } from './shared/event.service';
@Injectable()
export class EventRouteActivatorService implements CanActivate {

  constructor(public eventService: EventService, public router:Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const id = parseInt(route.params['id']);
    const eventExists = !!this.eventService.getEvent(id);
    if(!eventExists){
      this.router.navigate(['/404']);
    }
    return eventExists;
  }
}
