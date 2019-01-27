import { Component, OnInit, Input } from '@angular/core';
import { ISession } from '../events';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styles: []
})
export class SimpleModalComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit () {
  }
}
