import { Routes
 } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

export const userRoutes: Routes = [
  {'path':'profile', component:ProfileComponent}
];

// @NgModule({ 
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class UserRoutingModule { }
