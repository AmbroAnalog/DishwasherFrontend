import { Component, OnInit } from '@angular/core';
import { faListUl, faMagnifyingGlassChart, faEye, faInfo } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faListUl = faListUl;
  faMagnifyingGlassChart = faMagnifyingGlassChart;
  faEye = faEye;
  faInfo = faInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
