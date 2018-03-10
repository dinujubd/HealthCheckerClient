import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { HealthService } from './health.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule
  ],
  providers: [HealthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
