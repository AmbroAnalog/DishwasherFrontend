import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NgxGaugeModule } from "ngx-gauge";
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { isOnline, isNotEndedPipe, isNotAbandonedPipe, getRuntimeLeft } from './dishwasher.pipe';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DeviceComponent } from './components/device/device.component';
import { RunComponent } from './components/run/run.component';
import { LiveComponent } from './components/live/live.component';

import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SummaryComponent } from './components/summary/summary.component';
import { ProgramComponent } from './components/program/program.component';
import { MonthComponent } from './components/month/month.component';

const config: SocketIoConfig = { url: environment.api_root_url, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    DeviceComponent,
    RunComponent,
    isOnline,
    isNotEndedPipe,
    isNotAbandonedPipe,
    getRuntimeLeft,
    LiveComponent,
    SummaryComponent,
    ProgramComponent,
    MonthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    NgxGaugeModule,
    SocketIoModule.forRoot(config),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
