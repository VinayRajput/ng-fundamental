import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './nav-bar.component.html',
  styles: [`
    .nav.navbar-nav {font-size:16px;}
    #searchForm{margin-right:100px;}
    @media all and (max-width:1200px){ #searchForm{display:none;}}
    li > a.active { color: #f97924;}
  `]
})
export class NavbarComponent  {

  constructor(private auth: AuthService) { }

}
