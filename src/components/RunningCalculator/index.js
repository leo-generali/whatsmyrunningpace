import React, { Component } from 'react';
import View from './View';

import {
  hoursToSeconds,
  minutesToSeconds,
  secondsToMinutesString,
  secondsToHoursString
} from '../../helpers/time';
import { round } from '../../helpers/math';

class RunningCalculator extends Component {
  constructor(props) {
    super(props);

    this.handleDistanceInput = this.handleDistanceInput.bind(this);
    this.handleTimeInput = this.handleTimeInput.bind(this);
    this.handlePaceInput = this.handlePaceInput.bind(this);
    this.setPace = this.setPace.bind(this);
    this.setDistance = this.setDistance.bind(this);
    this.setTime = this.setTime.bind(this);
  }

  state = {
    distance: 12874.72,
    pace: 450,
    time: 3600,
    inputDistance: 8,
    inputPace: '07:30',
    inputTime: '01:00:00'
  };

  handleDistanceInput(e) {
    const inputDistance = parseFloat(e.target.value);
    const distance = inputDistance * 1609.34;
    this.setState({ inputDistance, distance });
  }

  handleTimeInput(inputTime) {
    const [hours, minutes, seconds] = inputTime
      .split(':')
      .map((num) => parseInt(num));
    const time = seconds + minutesToSeconds(minutes) + hoursToSeconds(hours);

    this.setState({ inputTime, time });
  }

  handlePaceInput(inputPace) {
    const [minutes, seconds] = inputPace.split(':').map((num) => parseInt(num));
    const pace = seconds + minutesToSeconds(minutes);
    this.setState({ inputPace, pace });
  }

  setPace() {
    const { distance, time } = this.state;
    const pace = time / (distance / 1609.34);
    const inputPace = secondsToMinutesString(pace);
    this.setState({ pace, inputPace });
  }

  setDistance() {
    const { time, pace } = this.state;
    const distance = round(time / pace) * 1609.34;
    const inputDistance = distance / 1609.34;
    this.setState({ distance, inputDistance });
  }

  setTime() {
    const { pace, distance } = this.state;
    const time = pace * (distance / 1609.34);
    const inputTime = secondsToHoursString(time);
    this.setState({ time, inputTime });
  }

  render() {
    return (
      <View
        {...this.state}
        handleDistanceInput={this.handleDistanceInput}
        handleTimeInput={this.handleTimeInput}
        handlePaceInput={this.handlePaceInput}
        setPace={this.setPace}
        setDistance={this.setDistance}
        setTime={this.setTime}
      />
    );
  }
}

export default RunningCalculator;
