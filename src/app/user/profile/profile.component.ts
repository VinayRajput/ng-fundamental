import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Toastr, TOKEN_TOASTR } from 'src/app/common/toastr.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [`
    em { font-size:12px; color:#ff0000; float:right;}
    .error input{background-color:#e3c3c5;}
    .error ::webkit-input-placeholder{color:#999;}
    .error ::moz-input-placeholder{color:#999;}
    .error :moz-input-placeholder{color:#999;}
    .error :ms-input-placeholder{color:#999;}
  `]
})
export class ProfileComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router,
    @Inject(TOKEN_TOASTR) private toastr: Toastr) { }
  private firstName;
  private lastName;
  private profileForm;

  ngOnInit () {
    if (!this.auth.currentUser) {
      this.router.navigate(['events']);
      return;
    }

    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile (profileFormValues) {
    if (this.profileForm.valid) {
      this.auth.updateProfile(profileFormValues)
        .subscribe(() => {
          this.toastr.success('Profile Saved', 'Your Profile is saved succesfully');
          //        this.router.navigate(['events']);
        });
    }
  }

  logout () {
    this.auth.logout().subscribe(() => {
      this.router.navigate(['/user/login']);
      this.auth.currentUser = undefined;
      this.toastr.success('You have successfully logged out.', 'Logged out');
    });
  }

  cancel () {
    this.router.navigate(['events']);
  }

  validateFirstName () {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName () {
    return this.lastName.valid || this.lastName.untouched;
  }
}
