import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { ProgramSummary, TimeSummary } from "../../interfaces/Summaries";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  program_summary: ProgramSummary;
  time_summary: TimeSummary[] = [];

  constructor(private requestService: RequestService) {
    this.program_summary = {} as ProgramSummary;
  }

  ngOnInit(): void {
    this.requestService.getProgramSummary().subscribe((program_summary) => (this.program_summary = program_summary))
    this.requestService.getTimeSummary().subscribe((time_summary) => (this.time_summary = time_summary))
  }

}
