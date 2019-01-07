import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared';

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
  constructor(private router: Router, private eventService: EventService) { }

  cancel() {
    this.router.navigate(['/events']);
  }

  ngOnInit() {
    this.event = {
      name: 'Ng Spectactular',
      date: '8/8/2028',
      time: '10am',
      price: 799.99,
      location: {
        address: '456 Happy st',
        city: 'Filicity',
        country: 'Angularistan'
      },
      onlineUrl: 'http://ngSpectactular.com',
      imageUrl: 'http://ngSpectactular.com/logo.png'
    };
  }

  saveEvent(formvalues) {
    this.eventService.saveEvent(formvalues);
    this.isDirty = false;
    this.router.navigate(['events']);
  }
}
