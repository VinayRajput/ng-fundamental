import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.scss']
})
export class UpvoteComponent {
  @Input() count: number;
  @Input() set voted (val) {
    this.iconColor = (!!val) ? 'red' : 'white';
  }

  @Output() vote = new EventEmitter();
  iconColor: string;
  constructor() { }
  onClick () {
    this.vote.emit({});
  }

}
