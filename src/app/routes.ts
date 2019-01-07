import { Routes } from '@angular/router';
import {
  EventDetailsComponent,
  EventListResovlerService,
  EventRouteActivatorService,
  EventsListComponent,
  CreateEventComponent,
  EditEventComponent
} from './events/index';

import { PageNotFoundComponent } from './errors/page-not-found.component/page-not-found.component';
export const appRoutes: Routes = [
  { 'path': 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { 'path': 'events/edit', component: EditEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
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
