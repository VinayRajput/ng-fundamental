import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventsAppComponent } from './events-app.component';
import { AuthService } from './user/auth.service';
import {
  EventDetailsComponent,
  EventListResovlerService,
  EventRouteActivatorService,
  EventService,
  EventThumbnailComponent,
  EventsListComponent,
  CreateEventComponent,
  EditEventComponent
} from './events/index';

import { NavbarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { PageNotFoundComponent } from './errors/page-not-found.component/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    PageNotFoundComponent,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    EventRouteActivatorService,
    EventListResovlerService,
    AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
export function checkDirtyState(comp: CreateEventComponent) {
  if (comp.isDirty) {
    return window.confirm('You have not saved this event, do you want to cancel?');
  }
  return true;
}