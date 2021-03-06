import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from './shared';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styles: []
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  @Input() eventId: number;
  visibleSessions: ISession[];

  constructor(public auth: AuthService, private voterService: VoterService) { }
  ngOnChanges () {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortSessions(this.sortBy);
    }
  }

  sortSessions (sortBy) {
    (sortBy === 'name') ? this.visibleSessions.sort(sortByName) : this.visibleSessions.sort(sortByVoters);
  }
  filterSessions (filterBy) {
    if (filterBy === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => session.level.toLowerCase() === filterBy);
    }
  }

  toggleVote (session: any) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName);
    } else {
      this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName);
    }

    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVoters);
    }
  }

  userHasVoted (session: ISession) {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
  }

}

function sortByName (s1: ISession, s2: ISession) {
  if (s1.name > s2.name) {
    return 1;
  } else if (s1.name === s2.name) {
    return 0;
  } else { return -1; }
}

function sortByVoters (s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
