import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <p>Hello World</p>
    <img alt='' src='assets/images/basic-shield.png' />
    <events-list></events-list>
  `,
  styleUrls: ['./app.component.css']
})

export class EventsAppComponent {
  title = 'Hello World';
}
