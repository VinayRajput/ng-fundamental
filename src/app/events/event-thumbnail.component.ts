import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventService } from './event-details';


@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
    .green { color: green }
    .bold { font-weight: bold }
  `]
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;
  @Output() childEvent = new EventEmitter();

  constructor(private eventService: EventService) {
  }

  ngOnInit () {
  }


  btnClicked () {
    this.childEvent.emit({ name: this.event.name, cost: this.event.price });
  }

  getTimingClasses () {
    let isEarlyStart = (this.event.time == '8:00 am') ? true : false;
    return { green: isEarlyStart, bold: isEarlyStart };
  }

  getStartTimeStyle (): any {
    let isEarlyStart = (this.event.time == '8:00 am') ? true : false;
    if (isEarlyStart) {
      return { 'color': '#ff0000', 'font-weight': 'bold' };
    }
    return {};
  }
}
