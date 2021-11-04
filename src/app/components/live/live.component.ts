import { Component, OnInit } from '@angular/core';
import { NgxGaugeModule } from "ngx-gauge";
import { faSignInAlt, faSignOutAlt, faTemperatureHigh, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { SocketService } from "../../services/socket.service";
import { RequestService } from '../../services/request.service';
import { Run } from '../../Run';
import { TempSeries } from '../../TempSeries';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {
  current_run?: Run;
  temperature_series?: TempSeries;

  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  faTemperatureHigh = faTemperatureHigh;
  faCaretUp = faCaretUp;

  gaugeValue = 22;
  gaugeThickness = 20;
  gaugeMin = 10;
  gaugeMax = 60;

  multi = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        }
      ]
    },

    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": 8270000
        }
      ]
    },

    {
      "name": "France",
      "series": [
        {
          "name": "2010",
          "value": 5000002
        },
        {
          "name": "2011",
          "value": 5800000
        }
      ]
    }
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  autoScale = true;

  constructor(public socket: SocketService, private requestService: RequestService) { }

  ngOnInit(): void {
    /**
    let ret = this.requestService.getLastRun('618429c1fa82d3b357ac32df');

    this.requestService.subject_device.subscribe(data => {

    })
    this.requestService.subject_run.subscribe(data => {
      this.current_run = data
    })
    this.requestService.subject_temps.subscribe(data => {
      this.temperature_series = data
    })
    **/

    this.socket.getRunStatus().subscribe(data => {
      console.log('RESIVE subscribtion on "getRunStatus"')
      this.current_run = data as Run;
      this.gaugeValue = this.current_run.machine_temperature;
    })
  }

  isEmptyObject(obj: any): boolean {
    return (obj && (Object.keys(obj).length != 0));
  }

}
