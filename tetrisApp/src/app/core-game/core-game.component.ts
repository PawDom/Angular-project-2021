import {
  Component,
  OnInit,
  ViewChild,
  Output,
  Input,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { TetrisCoreComponent } from 'ngx-tetris';

@Component({
  selector: 'app-core-game',
  templateUrl: './core-game.component.html',
  styleUrls: ['./core-game.component.css'],
})
export class CoreGameComponent implements OnInit {
  title = 'Tetris Game';
  points = 0;
  history = [];
  showGameEvents = 'all';
  gameStatus = 'The game is ready. Click START button to start the game!';

  @ViewChild('game') tetris: TetrisCoreComponent;
  @Output() exitEvent = new EventEmitter();
  @Input() person = {
    name: '',
    email: '',
  };

  constructor(private cd: ChangeDetectorRef) {}
  ngOnInit(): void {}

  private addGameEvent(message: String) {
    this.history.push({
      timestamp: Date.now(),
      message: message,
    });
    //this.sortHistory();
  }

  incrementPoints() {
    this.points += 1;
  }

  onGameStart() {
    if (this.tetris.state == 1) {
      this.tetris.actionStop();
      this.addGameEvent('Game stopped.');
      this.gameStatus = 'Game paused. Click START to resume the game!';
    } else {
      this.tetris.actionStart();
      this.addGameEvent('Game started.');
      this.gameStatus = 'The game is on... Good luck!';
    }
  }

  onLineCleared() {
    this.incrementPoints();
    this.addGameEvent('You have cleaned the line!');
  }

  onGameReset() {
    this.tetris.actionReset();
    this.addGameEvent('Game restarted.');
  }

  onGameOver() {
    this.addGameEvent('Game over.');
    this.gameStatus = 'Game over. Press RESTART button to play again.';
  }

  onGameExit() {
    this.addGameEvent('Game exitted.');
    this.tetris.actionStop();
    this.exitEvent.emit();
  }

  onLeft() {
    this.tetris.actionLeft();
  }
  onRight() {
    this.tetris.actionRight();
  }
  onDown() {
    this.tetris.actionDown();
  }
  onRotate() {
    this.tetris.actionRotate();
  }
}
