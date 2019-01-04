import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styles:[`
    .nav.navbar-nav {font-size:16px;}
    #searchForm{margin-right:100px;}
    @media all and (max-width:1200px){ #searchForm{display:none;}}
    li > a.active { color: #f97924;}
  `]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
