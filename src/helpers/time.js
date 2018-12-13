export const hoursToSeconds = (hours) => hours * 60 * 60;
export const minutesToSeconds = (minutes) => minutes * 60;

export const secondsToMinutesString = (seconds) => {
  const date = new Date(null);
  date.setSeconds(seconds);
  return date.toISOString().substr(14, 5);
};

export const secondsToHoursString = (seconds) => {
  const date = new Date(null);
  date.setSeconds(seconds);
  return date.toISOString().substr(11, 8);
};
