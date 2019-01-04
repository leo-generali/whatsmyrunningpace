import React, { Component } from 'react';
import { DISTANCE_OPTIONS } from '../../helpers/constants';
import { distanceToString } from '../../helpers/display';

class InputDistance extends Component {
  render() {
    return (
      <div>
        <label for="distance">Distance</label>
        <input
          value={this.props.inputDistance}
          onChange={this.props.handleDistanceInput}
          name="distance"
          type="number"
          step="0.01"
        />
        <select onChange={this.props.setDistanceWithDropdown}>
          {DISTANCE_OPTIONS.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button onClick={this.props.changeDistanceUnit}>Change Unit</button>
        {distanceToString(this.props.unitDistance)}
      </div>
    );
  }
}

export default InputDistance;
