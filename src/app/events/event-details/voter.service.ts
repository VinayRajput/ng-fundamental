import { Injectable } from '@angular/core';
import { ISession } from './shared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private http: HttpClient) { }

  userHasVoted (session: ISession, username: string) {
    return session.voters.some(voter => voter === username);
  }

  deleteVoter (eventId: number, session: ISession, username: string) {
    session.voters = session.voters.filter(v => v !== username);
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${username}`;
    this.http.delete(url)
      .pipe(catchError(this.handleError('addVoter')))
      .subscribe();
  }

  addVoter (eventId: number, session: ISession, username: string) {
    session.voters.push(username);
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${username}`;
    this.http.post(url, {}, options)
      .pipe(catchError(this.handleError('addVoter')))
      .subscribe();
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
