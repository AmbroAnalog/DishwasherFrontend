import { Component, OnInit, Input } from '@angular/core';
import { Run } from '../../interfaces/Run';
import { faTrash, faCircleExclamation, faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { getProgramName, getSequenceName, calculateDateRange, calculateTimePrediction, calculateEnergyCosts } from '../template.functions';

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
  public calculateEnergyCosts = calculateEnergyCosts;

  faTrash = faTrash;
  faCircleExclamation = faCircleExclamation;
  faHeartPulse = faHeartPulse;

  @Input() run!: Run;

  constructor() { }

  ngOnInit(): void {
  }

}
