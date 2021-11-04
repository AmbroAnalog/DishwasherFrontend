export interface Device {
  document_id: string;
  series_name: string;
  unique_device_identifier: string;
  last_alive: number;
  last_session_id: number;
}
