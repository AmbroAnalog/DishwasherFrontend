import { Component, OnInit } from '@angular/core';
import { SocketService } from "../../services/socket.service";
import { RequestService } from '../../services/request.service';
import { Device } from '../../interfaces/Device';
import { Run } from '../../interfaces/Run';
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

  constructor(public socket: SocketService, private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getDevices().subscribe((devices) => (this.devices = devices))
    this.requestService.getRuns().subscribe((runs) => (this.runs = runs))

    this.socket.getRunStatus().subscribe(data => {
      const current_run_index = this.runs.findIndex(x => x.session_id == data.session_id);
      this.runs[current_run_index] = data;
    })
    this.socket.getAliveStatus().subscribe(data => {
      const current_device_index = this.devices.findIndex(x => x.unique_device_identifier == data.unique_device_identifier);
      this.devices[current_device_index] = data;
    })
  }
}
