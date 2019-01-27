import { Injectable, Inject } from '@angular/core';
import { userModel } from './user.model';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TOKEN_TOASTR, Toastr } from '../common';

@Injectable()
export class AuthService {
  currentUser: userModel;

  constructor(public router: Router, private http: HttpClient, @Inject(TOKEN_TOASTR) toastr: Toastr) { }

  login (username: string, password: string) {
    const loginInfo = { username: username, password: password };
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap(data => {
        this.currentUser = <userModel>data['user'];
      }))
      .pipe(catchError(err => {
        return of(false);
      }));

  }

  updateProfile (formValues) {
    this.currentUser.firstName = formValues.firstName;
    this.currentUser.lastName = formValues.lastName;

    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
    // .pipe(tap(data => {
    //   this.currentUser = <userModel>data['user'];
    // }))
    // .pipe(catchError(err => {
    //   return of(false);
    // }));
  }

  isAuthenticated () {
    return !!this.currentUser;
  }

  logout () {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('/api/logout', {}, options)
      ;

  }

  checkAthenticatedStatus () {
    this.http.get('/api/currentIdentity')
      .pipe(tap(data => {
        this.currentUser = <userModel>data;
      }))
      .subscribe();
  }

}
