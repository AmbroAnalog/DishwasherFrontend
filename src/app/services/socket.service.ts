import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Observable, Observer } from 'rxjs';
import { Device } from '../interfaces/Device';
import { Run } from '../interfaces/Run';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) {}

  getRunStatus() {
    return this.socket.fromEvent('device-data').pipe(map((data: any) => data));
  }

  getTemperatureSeries() {
    return this.socket.fromEvent('temperature_series').pipe(map((data: any) => data));
  }
}
