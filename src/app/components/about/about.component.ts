import { Component, OnInit } from '@angular/core';
import { RequestService } from "../../services/request.service";
import { faPaperPlane, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faPaperPlane = faPaperPlane
  faCodeBranch = faCodeBranch

  backend_health = {}

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getBackendHealth().subscribe(data => {
      this.backend_health = data;
      console.log('get backend health', data);
    })
  }

}
