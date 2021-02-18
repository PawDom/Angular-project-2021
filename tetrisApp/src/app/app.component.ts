import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="Tetris Game"
  person = {};
  view = 'intro-page';
  //view = 'game';

  onGameStart($event)
  {
    this.person = {
      name: $event.name,
      email: $event.email,
    };
    this.view = 'core-game';
  }

  onGameExit($event)
  {
    this.view = 'intro-page';
  }
}
