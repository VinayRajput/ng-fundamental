import { Injectable } from '@angular/core';
import { userModel } from './user.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  currentUser: userModel;
  login(username: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: 'VinayRajput',
      firstName: 'Vinay',
      lastName: 'Rajput'
    };
    this.router.navigate(['/user/profile']);
    console.log(this.currentUser);
  }

  updateProfile(formValues) {
    this.currentUser.firstName = formValues.firstName;
    this.currentUser.lastName = formValues.lastName;
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
  constructor(public router: Router) { }
}
