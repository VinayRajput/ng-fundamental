import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-collapsible-well',
  template: `
    <div (click)="toggleClick()" class="well pointable">
      <ng-content select="[well-title]"></ng-content>
      <ng-content select="[well-body]" *ngIf="!!toggle"></ng-content>
    </div>
  `,
  styles: []
})
export class CollapsibleWellComponent implements OnInit {
  constructor() { }
  toggle = false;
  ngOnInit() {
  }

  toggleClick() {
    this.toggle = !this.toggle;
    console.log('toggle ' + this.toggle);
  }

}
