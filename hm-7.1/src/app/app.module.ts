import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JumboComponent } from './jumbo/jumbo.component';
import {manualComponent} from './manual/manual.component';
@NgModule({
  declarations: [
    AppComponent,
    JumboComponent,
    manualComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
