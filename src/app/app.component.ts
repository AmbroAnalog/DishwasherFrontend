import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DishwasherFrontend';

  constructor(private metaService: Meta) {}

  ngOnInit() {
    this.metaService.addTags([
      {name: 'color-scheme', content: 'dark'},
    ]);
  }
}
