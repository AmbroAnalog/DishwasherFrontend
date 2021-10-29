import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { Device } from '../../Device';
import { Run } from '../../Run';
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

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getDevices().subscribe((devices) => (this.devices = devices))
    this.requestService.getRuns().subscribe((runs) => (this.runs = runs))
  }





}
