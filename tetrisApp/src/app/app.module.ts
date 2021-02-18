import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TetrisCoreModule} from 'ngx-tetris';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { CoreGameComponent } from './core-game/core-game.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    CoreGameComponent,
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
