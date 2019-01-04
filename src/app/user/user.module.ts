import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userRoutes } from './user-routing';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    ProfileComponent
  ]
})
export class UserModule { }
