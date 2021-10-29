import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Device } from '../Device';
import { Run } from '../Run';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private api_root_url = environment.api_root_url;

  constructor(private http: HttpClient) { }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.api_root_url + 'request/get_all_devices/')
  }

  getRuns(): Observable<Run[]> {
    return this.http.get<Run[]>(this.api_root_url + 'request/get_all_runs/')
  }
}
