import { METER, KILOMETER, MILE } from './constants';

export const distanceToString = (distance) => {
  const distanceInts = [METER, KILOMETER, MILE];
  const distanceStrings = ['Meters', 'Kilometers', 'Miles'];
  const index = distanceInts.indexOf(distance);
  return distanceStrings[index];
};
