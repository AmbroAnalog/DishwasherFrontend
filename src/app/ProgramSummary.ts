import {Program} from "./Program";

export interface ProgramSummary {
  count_programs: number;
  count_runs: number;
  aenergy_summ: number;
  firstrun_time: number;
  program_summary: Program[];
}
