// Distace Paces
export const METER = 1;
export const KILOMETER = 1000 * METER;
export const MILE = 1609.34 * METER;

const QUARTERMILE = 400 * METER;
const HALFMILE = 800 * METER;
const FIFTEEN = 1500 * METER;
const FIVEK = 5 * KILOMETER;
const TENK = 10 * KILOMETER;

export const DISTANCE_OPTIONS = [
  { label: '400m', value: QUARTERMILE },
  { label: '800m', value: HALFMILE },
  { label: '1500m', value: FIFTEEN },
  { label: 'Mile', value: MILE }
];
