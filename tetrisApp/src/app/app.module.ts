import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TetrisCoreComponent } from './tetris-core/tetris-core.component';
import {TetrisCoreModule} from 'ngx-tetris';

@NgModule({
  declarations: [
    AppComponent,
    TetrisCoreComponent,
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
