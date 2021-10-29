import { Component, OnInit } from '@angular/core';
import { NgxGaugeModule } from "ngx-gauge";
import { SocketService } from "../../services/socket.service";
import { Run } from '../../Run';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {
  current_run?: Run;

  gaugeValue = 22;
  gaugeThickness = 20;
  gaugeMin = 10;
  gaugeMax = 70;

  constructor(public socket: SocketService) { }

  ngOnInit(): void {
    this.socket.getRunStatus().subscribe(data => {
      console.log('RESIVE subscribtion on "getRunStatus"')
      this.current_run = data as Run;
      this.gaugeValue = this.current_run.machine_temperature;
    })
  }

}
