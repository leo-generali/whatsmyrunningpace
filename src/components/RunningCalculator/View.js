import React from 'react';
import InputDistance from '../InputDistance';
import InputTime from '../InputTime';
import InputPace from '../InputPace';

const View = (props) => {
  return (
    <div>
      Pace: {props.inputPace} Pace in Seconds: {props.pace}
      <InputPace {...props} />
      <br />
      Distance: {props.inputDistance} Distance in Meters: {props.distance}
      <InputDistance {...props} />
      <br />
      Time: {props.inputTime} Time in Seconds: {props.time}
      <InputTime {...props} />
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
