import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { ProgramSummary } from "../../ProgramSummary";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  program_summary: ProgramSummary;

  constructor(private requestService: RequestService) {
    this.program_summary = {} as ProgramSummary;
  }

  ngOnInit(): void {
    this.requestService.getProgramSummary().subscribe((program_summary) => (this.program_summary = program_summary))
  }

}
