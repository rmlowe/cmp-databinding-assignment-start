import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() eventEmitted = new EventEmitter<number>();
  ref: number;
  num = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    console.log('Game started!');
    if (!this.ref) {
      this.ref = window.setInterval(() => {
        this.eventEmitted.emit(this.num++);
      }, 1000);
    }
  }

  onStopGame() {
    console.log('Game stopped!');
    if (this.ref) {
      window.clearInterval(this.ref);
      this.ref = undefined;
    }
  }

}
