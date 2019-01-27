import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
})

export class CreateEventComponent implements OnInit {
  isDirty = true;
  constructor(private router: Router, private eventService: EventService) { }
  cancel() {
    this.router.navigate(['/events']);
  }
  ngOnInit() {
  }
  saveEvent(formvalues) {
    this.eventService.saveEvent(formvalues).subscribe( () => {
      this.isDirty = false;
      this.router.navigate(['events']); 
    });
  }

  reCheckValidity(formGroup: FormGroup) {
    formGroup.controls['address'].updateValueAndValidity();
  }
}
