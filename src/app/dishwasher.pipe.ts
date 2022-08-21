import { Pipe, PipeTransform } from '@angular/core';
import { Device } from './Device';
import { Run } from './Run';

@Pipe({name: 'isOnline'})
export class isOnline implements PipeTransform {
  transform(object: Device): boolean {
    let currentDate = Date.now() / 1000 | 0;
    let range = currentDate - object.last_alive;
    if (range < 60) {
      return true;
    } else {
      return false;
    }
  }
}

@Pipe({name: 'isNotEnded'})
export class isNotEndedPipe implements PipeTransform {
  transform(object: Run): boolean {
    let currentDate = Date.now() / 1000 | 0;
    if (object.program_time_start !== null && object.program_time_end === null) {
      return true;
    } else {
      return false;
    }
  }
}

@Pipe({name: 'isNotAbandoned'})
export class isNotAbandonedPipe implements PipeTransform {
  transform(object: Run): boolean {
    let currentDate = Date.now() / 1000 | 0;
    if (object.program_time_start !== null) {
      let startTimeGap = currentDate - object.program_time_start;
      // standart = 9000
      if (object.program_time_end === null && startTimeGap > 120000000) {
        return false;
      }
    }
    return true;
  }
}

@Pipe({name: 'getRuntimeLeft'})
export class getRuntimeLeft implements PipeTransform {
  transform(object: Run): number {
    return Math.round(object.program_time_left_program / 60)
  }
}
