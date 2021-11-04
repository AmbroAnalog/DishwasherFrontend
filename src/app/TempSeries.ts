export interface TempSeries {
  document_id?: string;
  series_name: string;
  unique_device_identifier: string;
  session_id: number;
  series: any[];
}
