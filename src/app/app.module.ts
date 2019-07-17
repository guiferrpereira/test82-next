import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OverrideModule } from './modules/override/override';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OverrideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
