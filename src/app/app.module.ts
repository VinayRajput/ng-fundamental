import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { PageNotFoundComponent } from './errors/page-not-found.component/page-not-found.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { EventListResovlerService } from './events/event-list-resovler.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    PageNotFoundComponent,
    //AppRoutingModule
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    EventRouteActivatorService,
    EventListResovlerService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
export function checkDirtyState(comp:CreateEventComponent){
  if(comp.isDirty){
    return window.confirm('You have not saved this event, do you want to cancel?')
  } 
  return true;
}