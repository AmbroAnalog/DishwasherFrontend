import { Component, OnInit, Input } from '@angular/core';
import { Run } from '../../Run';
import { getProgramName, getSequenceName, calculateDateRange, calculateTimePrediction } from '../template.functions';

@Component({
  selector: '[run-table-row]',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css']
})
export class RunComponent implements OnInit {
  public getProgramName = getProgramName;
  public calculateDateRange = calculateDateRange;
  public getSequenceName = getSequenceName;
  public calculateTimePrediction = calculateTimePrediction;
  @Input() run!: Run;

  constructor() { }

  ngOnInit(): void {
  }

}
