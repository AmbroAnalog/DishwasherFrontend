import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../../interfaces/Device';
import { getProgramName, calculateDateRange } from '../template.functions';

@Component({
  selector: '[device-row]',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  public getProgramName = getProgramName;
  public calculateDateRange = calculateDateRange;
  @Input() device!: Device;

  constructor() { }

  ngOnInit(): void {
  }

}
