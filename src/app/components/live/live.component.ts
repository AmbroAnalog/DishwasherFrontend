import { Component, OnInit } from '@angular/core';
import { NgxGaugeModule } from "ngx-gauge";
import { faSignInAlt, faSignOutAlt, faTemperatureHigh, faCaretUp, faPlug, faBolt } from "@fortawesome/free-solid-svg-icons";
import { SocketService } from "../../services/socket.service";
import { RequestService } from '../../services/request.service';
import { Run } from '../../interfaces/Run';
import { TempSeries } from '../../interfaces/TempSeries';
import { calculateTimePrediction, calculateEnergyCosts } from '../template.functions';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {
  current_run?: Run;
  temperature_series?: TempSeries;
  public calculateTimePrediction = calculateTimePrediction;
  public calculateEnergyCosts = calculateEnergyCosts;

  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  faTemperatureHigh = faTemperatureHigh;
  faCaretUp = faCaretUp;
  faPlug = faPlug;
  faBolt = faBolt;

  gaugeValue = 22;
  gaugeThickness = 20;
  gaugeMin = 10;
  gaugeMax = 60;

  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];

  constructor(public socket: SocketService, private requestService: RequestService) { }

  ngOnInit(): void {
    //TODO: get interesting device_document_id dynamically by last last seen!
    let ret = this.requestService.getLastRun('63023376c4cf1d86502e9c3f');

    this.requestService.subject_device.subscribe(data => {

    })
    this.requestService.subject_run.subscribe(data => {
      this.current_run = data
    })
    this.requestService.subject_temps.subscribe(data => {
      this.temperature_series = data
    })

    this.socket.getRunStatus().subscribe(data => {
      console.log('RESIVE subscribtion on "getRunStatus"')
      this.current_run = data as Run;
      this.gaugeValue = this.current_run.machine_temperature;
    })

    this.socket.getTemperatureSeries().subscribe(data => {
      console.log('RESIVE temperature_series')
      this.temperature_series = data as TempSeries;
    })

  }

  isEmptyObject(obj: any): boolean {
    return (obj && (Object.keys(obj).length != 0));
  }

}
