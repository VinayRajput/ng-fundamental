import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styles: [`
  em { font-size:12px; color:#ff0000; float:right;}
    .error input{background-color:#e3c3c5;}
    .error ::webkit-input-placeholder{color:#999;}
    .error ::moz-input-placeholder{color:#999;}
    .error :moz-input-placeholder{color:#999;}
    .error :ms-input-placeholder{color:#999;}
  `]
})
export class CreateEventComponent implements OnInit {
  isDirty = true;
  constructor(private router: Router, private eventService: EventService) { }
  cancel() {
    this.router.navigate(['/events'])
  }
  ngOnInit() {
  }
  saveEvent(formvalues) {
    this.eventService.saveEvent(formvalues);
    this.isDirty = false;
    this.router.navigate(['events']);
  }
}
