import React from 'react';
import InputDistance from '../InputDistance';
import InputTime from '../InputTime';
import InputPace from '../InputPace';

import { distanceToString } from '../../helpers/display';

const View = (props) => {
  return (
    <div>
      Pace: {props.inputPace} Pace in Seconds: {props.pace}
      <InputPace {...props} />
      <button onClick={props.changePaceUnit}>change unit</button>
      <br />
      {distanceToString(props.unitPace)}
      <br />
      <br />
      Distance: {props.inputDistance} Distance in Meters: {props.distance}
      <InputDistance {...props} />
      <button onClick={props.changeDistanceUnit}>change unit</button>
      <br />
      {distanceToString(props.unitDistance)}
      <br />
      <br />
      Time: {props.inputTime} Time in Seconds: {props.time}
      <InputTime {...props} />
      <br />
      <br />
      <button onClick={props.setPace}>get pace</button>
      <br />
      <button onClick={props.setDistance}>get distance</button>
      <br />
      <button onClick={props.setTime}>get time</button>
    </div>
  );
};

export default View;
