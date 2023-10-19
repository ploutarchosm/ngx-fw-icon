import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxFwIconComponent } from 'ngx-fw-icon';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxFwIconComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
