import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found.component',
  templateUrl: './page-not-found.component.html',
  styles: [`
  .errorMessage { 
    margin-top:150px; 
    font-size: 170px;
    text-align: center; 
  }`]
})
export class PageNotFoundComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
