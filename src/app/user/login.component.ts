import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    em{ float:right; color:#ff0000; font-size:12px;}
  `]
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  showValidation: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  login(formObj) {
    this.authService.login(formObj.userName, formObj.password);
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  ngOnInit() {
  }

}
