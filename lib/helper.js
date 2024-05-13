export function secondsToHourMinuteSecond(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = hours.toString();
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  if (hours === 0) return `${formattedMinutes}:${formattedSeconds}`;
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

export function timeDifference(date1, date2) {
  if (!date1 || !date2) return "N/A";
  const difference = Math.abs(date2 - date1) / 1000; // Difference in seconds

  if (difference < 60) {
    return `${Math.floor(difference)} second${
      Math.floor(difference) === 1 ? "" : "s"
    } ago`;
  } else if (difference < 3600) {
    const minutes = Math.floor(difference / 60);
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  } else if (difference < 86400) {
    const hours = Math.floor(difference / 3600);
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else if (difference < 2592000) {
    // Roughly 30 days
    const days = Math.floor(difference / 86400);
    return `${days} day${days === 1 ? "" : "s"} ago`;
  } else {
    return "More than a month ago";
  }
}

export function secondsToHm(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  if (hours === 0) return `${minutes}m`;
  return `${hours}h ${minutes}m`;
}

export function kgToLbs(kg) {
  return Math.round(kg * 2.205);
}
