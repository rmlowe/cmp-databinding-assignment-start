import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emittedEvents: {isEven: boolean, num: number}[] = [];

  onEventEmitted(num: number) {
    this.emittedEvents.push({isEven: num % 2 === 0, num});
    console.log('Event emitted: ' + num);
  }
}
