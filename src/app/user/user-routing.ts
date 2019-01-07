import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login.component';

export const userRoutes: Routes = [
  {'path':'profile', component:ProfileComponent},
  {'path':'login', component:LoginComponent}
];

// @NgModule({ 
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class UserRoutingModule { }
