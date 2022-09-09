export interface ProgramSummary {
  count_programs: number;
  count_runs: number;
  aenergy_summ: number;
  firstrun_time: number;
  program_summary: Program[];
}

export interface Program {
  program_id: number;
  program_counter: number;
  program_last_run: number;
  program_runtime_average: number;
  program_runtime_stdev: number;
  program_estimated_average: number;
  program_aenergy_average: number;
  program_aenergy_summ: number;
}

export interface TimeSummary {
  year_number: number;
  year_program_counter: number;
  month_count: number;
  monthly_summary: Month[]
}

export interface Month {
  timestamp: number;
  year_number: number;
  month_number: number;
  monthly_counter: number;
  monthly_aenergy: number
}
