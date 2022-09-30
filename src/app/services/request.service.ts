import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Device } from '../interfaces/Device';
import { Run } from '../interfaces/Run';
import { TempSeries } from '../interfaces/TempSeries';
import { ProgramSummary, TimeSummary } from "../interfaces/Summaries";


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

  public subject_device: Subject<Device> = new Subject();
  public subject_run: Subject<Run> = new Subject();
  public subject_temps: Subject<TempSeries> = new Subject();

  constructor(private http: HttpClient) { }

  getBackendHealth() {
    return this.http.get(this.api_root_url + 'health')
  }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.api_root_url + 'request/get_all_devices/')
  }

  getRuns(): Observable<Run[]> {
    return this.http.get<Run[]>(this.api_root_url + 'request/get_all_runs/')
  }

  getLastRun(device_document_id: string): any {
    let apiUrl = this.api_root_url + 'request/get_latest_run_by_device/' + device_document_id;
    return this.http.get<{ device: Device, last_run: Run, temperature_series: TempSeries }>(apiUrl).subscribe(data => {
      this.subject_device.next(data.device);
      this.subject_run.next(data.last_run);
      this.subject_temps.next(data.temperature_series);
    });
  }

  getProgramSummary(): Observable<ProgramSummary> {
    return this.http.get<ProgramSummary>(this.api_root_url + 'request/get_program_summary/')
  }

  getTimeSummary(): Observable<TimeSummary[]> {
    return this.http.get<TimeSummary[]>(this.api_root_url + 'request/get_time_summary/')
  }
}
