import { Component, OnInit, Input } from '@angular/core';
import { Program } from "../../Program";

@Component({
  selector: '[program-row]',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  @Input() program!: Program;

  constructor() { }

  ngOnInit(): void {
  }

}
