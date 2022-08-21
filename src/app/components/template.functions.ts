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

export function getSequenceName(step_sequence: number): string {
  let programName = "Stop - Start";
  switch (step_sequence) {
    case 1: {
      programName = "1. Vorspülen";
      break;
    }
    case 2: {
      programName = "2. Vorspülen";
      break;
    }
    case 3: {
      programName = "Reinigen";
      break;
    }
    case 4: {
      programName = "Zwichenspülen";
      break;
    }
    case 5: {
      programName = "Klarspülen";
      break;
    }
    case 6: {
      programName = "Trocknen";
      break;
    }
    case 7: {
      programName = "Auslaufen";
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

export function calculateTimePrediction(time_left: number | undefined): string {
  let timestamp = Math.floor((Date.now() / 1000) + Number(time_left))
  let spot = new Date(timestamp * 1000);

  return spot.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

export function calculateEnergyCosts(used_energy: number | undefined): string {
  let energy = Number(used_energy);
  let costs = (energy / 1000) * 0.36;
  return costs.toFixed(2);
}
