import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NgxGaugeModule } from "ngx-gauge";
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { isOnline, isRunning, getRuntimeLeft } from './dishwasher.pipe';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DeviceComponent } from './components/device/device.component';
import { RunComponent } from './components/run/run.component';
import { LiveComponent } from './components/live/live.component';

import { environment } from '../environments/environment';

const config: SocketIoConfig = { url: environment.api_root_url, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    DeviceComponent,
    RunComponent,
    isOnline,
    isRunning,
    getRuntimeLeft,
    LiveComponent
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
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
