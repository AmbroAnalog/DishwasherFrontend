import { Component, OnInit, Input } from '@angular/core';
import { Run } from '../../Run';
import { getProgramName, calculateDateRange } from '../template.functions';

@Component({
  selector: '[run-table-row]',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css']
})
export class RunComponent implements OnInit {
  public getProgramName = getProgramName;
  public calculateDateRange = calculateDateRange;
  @Input() run!: Run;

  constructor() { }

  ngOnInit(): void {
  }

}
