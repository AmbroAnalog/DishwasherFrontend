import { Component, OnInit, Input } from '@angular/core';
import { Run } from '../../interfaces/Run';
import { faTrash, faCircleExclamation, faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { getProgramName, getSequenceName, calculateDateRange, calculateTimePrediction, calculateEnergyCosts } from '../template.functions';
import { trigger, state, style, transition, animate } from "@angular/animations";

@Component({
  selector: '[run-table-row]',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css'],
  animations: [
    trigger('heartBeatTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.5s', style({ opacity: 0 }))
      ])
    ])
  ]
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
