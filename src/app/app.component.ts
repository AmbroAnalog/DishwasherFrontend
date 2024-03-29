import { Component } from '@angular/core';
import { UpdateService } from './services/update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'DishwasherFrontend';

  constructor(private sw: UpdateService) {
    // check the service worker for updates
    this.sw.checkForUpdates();
  }
}
