import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private api_root_url = environment.api_root_url;

  constructor(private http: HttpClient) {

  }

  addPushSubscriber(sub: any) {
    return this.http.post(this.api_root_url + 'notify/subscription', sub);
  }

  send() {
    return this.http.post(this.api_root_url + 'notify/push_v1', null);
  }
}
