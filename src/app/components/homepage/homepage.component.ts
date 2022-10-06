import { Component, OnInit } from '@angular/core';
import { SwPush } from "@angular/service-worker";
import { SocketService } from "../../services/socket.service";
import { RequestService } from '../../services/request.service';
import { NotificationService } from "../../services/notification.service";
import { Device } from '../../interfaces/Device';
import { Run } from '../../interfaces/Run';
import { environment } from "../../../environments/environment";
import { getProgramName, calculateDateRange } from '../template.functions';

@Component({
  selector: 'app-device-list',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public getProgramName = getProgramName;
  public calculateDateRange = calculateDateRange;
  devices: Device[] = [];
  runs: Run[] = [];

  constructor(
    public socket: SocketService,
    private requestService: RequestService,
    private swPush: SwPush,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.requestService.getDevices().subscribe((devices) => (this.devices = devices))
    this.requestService.getRuns().subscribe((runs) => (this.runs = runs))

    this.socket.getRunStatus().subscribe(data => {
      const current_run_index = this.runs.findIndex(x => x.session_id == data.session_id);
      if (current_run_index == -1) {
        //run is not in current list. reload...
        this.requestService.getRuns().subscribe((runs) => (this.runs = runs));
        console.log('add new run to run list');
        //this.runs.push(data);
      } else {
        this.runs[current_run_index] = data;
      }
    })
    this.socket.getAliveStatus().subscribe(data => {
      const current_device_index = this.devices.findIndex(x => x.unique_device_identifier == data.unique_device_identifier);
      this.devices[current_device_index] = data;
    })

    this.subscribeToNotifications()
  }

  subscribeToNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: environment.vapid_public_key
    })
      .then(sub => this.notificationService.addPushSubscriber(sub).subscribe())
      .catch(err => console.error("Could not subscribe to notifications", err));
  }
}
