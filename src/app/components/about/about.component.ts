import { Component, OnInit } from '@angular/core';
import { faPaperPlane, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  faPaperPlane = faPaperPlane
  faCodeBranch = faCodeBranch

  constructor() { }

  ngOnInit(): void {
  }

}
