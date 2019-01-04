import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  btnClicked() {
    this.childEvent.emit({ name: this.event.name, cost: this.event.price });
  }

  getTimingClasses() {
    let isEarlyStart = (this.event.time == '8:00 am') ? true : false;
    return { green: isEarlyStart, bold: isEarlyStart };
  }

  getStartTimeStyle(): any {
    let isEarlyStart = (this.event.time == '8:00 am') ? true : false;
    if (isEarlyStart) {
      return { 'color': '#ff0000', 'font-weight': 'bold' };
    }
    return {};
  }

  constructor() {
  }

  ngOnInit() {
  }

}
