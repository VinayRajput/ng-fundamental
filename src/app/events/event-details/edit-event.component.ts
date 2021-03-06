import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService, IEvent } from './shared';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styles: [`
  em { font-size:12px; color:#ff0000; float:right;}
    .error input{background-color:#e3c3c5;}
    .error ::webkit-input-placeholder{color:#999;}
    .error ::moz-input-placeholder{color:#999;}
    .error :moz-input-placeholder{color:#999;}
    .error :ms-input-placeholder{color:#999;}
  `]
})

export class EditEventComponent implements OnInit {
  isDirty = true;
  event;
  constructor(private router: Router, private eventService: EventService, private route: ActivatedRoute) { }

  cancel () {
    this.router.navigate(['/events']);
  }

  ngOnInit () {
    const id = this.route.snapshot.params['id'];
    this.eventService.getEvent(+id).subscribe((event: IEvent) => {
      this.event = event;
    });
  }

  saveEvent (formvalues) {
    this.eventService.saveEvent(formvalues);
    this.isDirty = false;
    this.router.navigate(['events']);
  }
}
