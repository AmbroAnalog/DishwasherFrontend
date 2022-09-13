import { Component, OnInit, Input } from '@angular/core';
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { TimeSummary, Month } from "../../interfaces/Summaries";
import { calculateEnergyCosts, getMonthName } from '../template.functions';


@Component({
  selector: '[year-row]',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {
  @Input() year!: TimeSummary;

  faCalendarWeek = faCalendarWeek;

  public calculateEnergyCosts = calculateEnergyCosts;
  public getMonthName = getMonthName;
  current_year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
