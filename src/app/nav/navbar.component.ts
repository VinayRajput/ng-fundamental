import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';
import { SimpleModalComponent } from '../common/index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav {font-size:16px;}
    #searchForm{margin-right:100px;}
    @media all and (max-width:1200px){ #searchForm{display:none;}}
    li > a.active { color: #f97924;}
  `]
})
export class NavbarComponent {
  searchTerm = ``;
  resultFound = null;
  foundSessions: ISession[] = [];

  constructor(private auth: AuthService, private eventService: EventService) { }
  searchSession (searchTerm) {
    this.resultFound = null;
    this.foundSessions = [];
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      this.resultFound = !!this.foundSessions.length;
    }
    );

  }
}
