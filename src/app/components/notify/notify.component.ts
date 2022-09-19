import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notify',
  template: `
        <button class="button button-primary" (click)="subscribeToNotifications()">
          Subscribe
        </button>
`})
export class NotifyComponent implements OnInit {

  readonly VAPID_PUBLIC_KEY = "BPMQOPWj7WyL1IoqrMhKbZBcmFSRl_dRPgr3g4FrcgEQuIhWwkKwE9c03k-QDr-xLRSoBT_pGQzhXfj10bWnLKk"

  constructor(
    private swPush: SwPush,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  subscribeToNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => this.notificationService.addPushSubscriber(sub).subscribe())
      .catch(err => console.error("Could not subscribe to notifications", err));
  }

}
