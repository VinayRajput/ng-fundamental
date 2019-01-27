import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventsAppComponent } from './events-app.component';
import { AuthService } from './user/auth.service';
import {
  EventDetailsComponent,
  EventListResovlerService,
  EventService,
  EventThumbnailComponent,
  EventsListComponent,
  CreateEventComponent,
  EditEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  EventResovler
} from './events/index';
import { CollapsibleWellComponent, TOKEN_TOASTR, Toastr, JQ_TOKEN, SimpleModalComponent } from './common/index';
import { NavbarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { PageNotFoundComponent } from './errors/page-not-found.component/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpvoteComponent } from './events/event-details/upvote.component';
import { ValidateAddressDirective } from './events/event-details/validate-address.directive';
import { HttpClientModule } from '@angular/common/http';

const toastr: Toastr = window['toastr'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    PageNotFoundComponent,
    EditEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    UpvoteComponent,
    ValidateAddressDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    EventService,
    EventListResovlerService,
    EventResovler,
    AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    { provide: TOKEN_TOASTR, useValue: toastr },
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
export function checkDirtyState (comp: CreateEventComponent) {
  if (comp.isDirty) {
    return window.confirm('You have not saved this event, do you want to cancel?');
  }
  return true;
}
