import React, { Component } from 'react';
import View from './View';

import {
  hoursToSeconds,
  minutesToSeconds,
  secondsToMinutesString,
  secondsToHoursString
} from '../../helpers/time';
import { round } from '../../helpers/math';
import { METER, KILOMETER, MILE, UNIT_OPTIONS } from '../../helpers/constants';

class RunningCalculator extends Component {
  constructor(props) {
    super(props);

    this.handleDistanceInput = this.handleDistanceInput.bind(this);
    this.handleTimeInput = this.handleTimeInput.bind(this);
    this.handlePaceInput = this.handlePaceInput.bind(this);
    this.setPace = this.setPace.bind(this);
    this.setDistance = this.setDistance.bind(this);
    this.setDistanceWithDropdown = this.setDistanceWithDropdown.bind(this);
    this.setTime = this.setTime.bind(this);
    this.changeMultiplierDistance = this.changeMultiplierDistance.bind(this);
    this.changeMultiplierPace = this.changeMultiplierPace.bind(this);
  }

  state = {
    distance: 12874.72,
    inputDistance: 8,
    unitDistance: MILE,
    pace: 450,
    inputPace: '07:30',
    unitPace: MILE,
    time: 3600,
    inputTime: '01:00:00'
  };

  handleDistanceInput(e) {
    const inputDistance = parseFloat(e.target.value);
    const distance = inputDistance * this.state.unitDistance;
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
    const pace = time / (distance / this.state.unitDistance);
    const inputPace = secondsToMinutesString(pace);
    this.setState({ pace, inputPace });
  }

  changeMultiplierPace() {
    const { distance, time } = this.state;
    const len = UNIT_OPTIONS.length;
    const index = UNIT_OPTIONS.indexOf(this.state.unitPace);
    const newIndex = index < len - 1 ? index + 1 : 0;
    const unitPace = UNIT_OPTIONS[newIndex];
    const pace = time / (distance / unitPace);
    const inputPace = secondsToMinutesString(pace);

    this.setState({
      inputPace,
      unitPace,
      pace
    });
  }

  setDistance() {
    const { time, pace } = this.state;
    const distance = (time / pace) * this.state.unitDistance;
    const inputDistance = round(distance / this.state.unitDistance);
    this.setState({ distance, inputDistance });
  }

  setDistanceWithDropdown(e) {
    const distance = e.target.value;
    const inputDistance = round(distance / this.state.unitDistance);
    this.setState({ distance, inputDistance });
  }

  changeMultiplierDistance() {
    const { time, pace } = this.state;
    const len = UNIT_OPTIONS.length;
    const index = UNIT_OPTIONS.indexOf(this.state.unitDistance);
    const newIndex = index < len - 1 ? index + 1 : 0;
    const unitDistance = UNIT_OPTIONS[newIndex];
    const distance = (time / pace) * unitDistance;

    this.setState({
      unitDistance,
      distance
    });
  }

  setTime() {
    const { pace, distance } = this.state;
    const time = pace * (distance / this.state.unitPace);
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
        setDistanceWithDropdown={this.setDistanceWithDropdown}
        setTime={this.setTime}
        changeMultiplierDistance={this.changeMultiplierDistance}
        changeMultiplierPace={this.changeMultiplierPace}
      />
    );
  }
}

export default RunningCalculator;
