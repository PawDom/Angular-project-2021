import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tetris-core',
  templateUrl: './tetris-core.component.html',
  styleUrls: ['./tetris-core.component.css']
})
export class TetrisCoreComponent implements OnInit {

  buttons = 'here we will display buttons';
  start = 'button for start will be here';
  reset = 'button for reset will be here';

  constructor() { }

  ngOnInit(): void {
  }

}
