import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { PageNotFoundComponent } from './errors/page-not-found.component/page-not-found.component';
import { EventRouteActivatorService } from './/events/event-details/event-route-activator.service'
import { EventListResovlerService } from './events/event-list-resovler.service';
export const appRoutes: Routes = [
  { 'path': 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { 'path': 'events', component: EventsListComponent, resolve: { events: EventListResovlerService } },
  { 'path': '404', component: PageNotFoundComponent },
  { 'path': 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
  { 'path': '', redirectTo: '/events', pathMatch: 'full' },
  {'path': 'user', loadChildren:'./user/user.module#UserModule'}
];
  
// @NgModule({
//   imports: [RouterModule.forRoot(appRoutes)],
//   exports: [RouterModule]
// })

// export class AppRoutingModule { }
