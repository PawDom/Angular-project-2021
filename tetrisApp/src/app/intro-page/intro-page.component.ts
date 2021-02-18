import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.css']
})
export class IntroPageComponent implements OnInit {

  @Output() startEvent = new EventEmitter();

  constructor() { }
  ngOnInit(): void {
  }

  start(form: FormGroup)
  {
    const
      name = form.value.name,
      email = form.value.email;

    if( form.valid )
      this.startEvent.emit({name, email});
  }
}

