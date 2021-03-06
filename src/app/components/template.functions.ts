export function getProgramName(programID: number): any {
  let programName = "invalid";
  switch (programID) {
    case 1: {
      programName = "VDE - 0";
      break;
    } case 2: {
      programName = "Stop - Start";
      break;
    } case 3: {
      programName = "Intensiv 65°C";
      break;
    } case 4: {
      programName = "Universal Plus 65°C";
      break;
    } case 5: {
      programName = "Universal Plus 55°C";
      break;
    } case 6: {
      programName = "Universal 65°C";
      break;
    } case 7: {
      programName = "Universal 55°C";
      break;
    } case 8: {
      programName = "Spar 65°C";
      break;
    } case 9: {
      programName = "Spar 55°C";
      break;
    } case 10: {
      programName = "Kurz 45°C";
      break;
    } case 11: {
      programName = "Fein 45°C";
      break;
    } case 12: {
      programName = "Kalt";
      break;
    }
  }
  return programName;
}

export function calculateDateRange(date: number): string {
  let currentDate = Date.now() / 1000 | 0;
  let range = currentDate - date;

  if (range < 30) {
    return "wenigen Sekunden";
  } else if (range < 120) {
    return "wenigen Minuten";
  } else if (range >= 120 && range <= 60*60) {
    let value = Math.round(range / 60)
    return String(value) + (value == 1 ? " Minute" : " Minuten");
  } else if (range >= 60*60 && range <= 60*60*24) {
    let value = Math.round(range / (60*60))
    return String(value) + (value == 1 ? " Stunde" : " Stunden");
  } else {
    let value = Math.round(range / (60*60*24))
    return String(value) + (value == 1 ? " Tag" : " Tagen");
  }
}
