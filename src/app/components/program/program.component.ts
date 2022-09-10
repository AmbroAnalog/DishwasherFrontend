import { Component, OnInit, Input } from '@angular/core';
import { Program } from "../../interfaces/Summaries";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { getProgramName, calculateEnergyCosts, calculateDateRange } from '../template.functions';

@Component({
  selector: '[program-row]',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  @Input() program!: Program;

  public getProgramName = getProgramName;
  public calculateEnergyCosts = calculateEnergyCosts;
  public calculateDateRange = calculateDateRange;

  faCrown = faCrown;

  constructor() { }

  ngOnInit(): void {
  }

}
