import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <navbar></navbar>
<div class="container">
<router-outlet></router-outlet>
<!-- <events-list #eventList></events-list>   -->
</div>
`,
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
