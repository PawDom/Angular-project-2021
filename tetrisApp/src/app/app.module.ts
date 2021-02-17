import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { buttons } from './buttons/buttons.component';
import {TetrisCoreModule} from 'ngx-tetris';
import { ButtonsRightComponent } from './buttons-right/buttons-right.component';

@NgModule({
  declarations: [
    AppComponent,
    buttons,
    ButtonsRightComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    TetrisCoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
