export interface Run {
  document_id?: string;
  session_id: number;
  device_identifier: string;
  program_runtime: number;
  program_progress_percent: number;
  program_step_operational: number;
  program_step_sequence: number;
  program_selected_id: number;
  program_estimated_runtime: number;
  program_time_start: number;
  program_time_end: number;
  program_time_left_step: number;
  program_time_left_sequence: number;
  program_time_left_program: number;
  machine_temperature: number;
  machine_sensor_values: any;
}
