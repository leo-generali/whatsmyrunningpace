// Distace Paces
export const METER = 1;
export const KILOMETER = 1000 * METER;
export const MILE = 1609.34 * METER;

const QUARTERMILE = 400 * METER;
const HALFMILE = 800 * METER;
const FIFTEEN = 1500 * METER;
const THREEK = 3 * KILOMETER;
const FIVEK = 5 * KILOMETER;
const TENK = 10 * KILOMETER;
const FIFTEENK = 15 * KILOMETER;
const TENMILE = 16.0934 * KILOMETER;
const TWENTYK = 20 * KILOMETER;
const HALFMARATHON = 21.0975 * KILOMETER;
const MARATHON = 42.195 * KILOMETER;

export const UNIT_OPTIONS = [KILOMETER, MILE];

export const DISTANCE_OPTIONS = [
  { label: '400m', value: QUARTERMILE },
  { label: '800m', value: HALFMILE },
  { label: '1500m', value: FIFTEEN },
  { label: 'Mile', value: MILE },
  { label: '3k/Steeplechase', value: THREEK },
  { label: '5k', value: FIVEK },
  { label: '10k', value: TENK },
  { label: '15k', value: FIFTEENK },
  { label: '10 mile', value: TENMILE },
  { label: '20k', value: TWENTYK },
  { label: 'Half Marathon', value: HALFMARATHON },
  { label: 'Marathon', value: MARATHON }
];
