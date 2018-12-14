import React, { Component } from 'react';
import { DISTANCE_OPTIONS } from '../../helpers/constants';

class InputDistance extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default InputDistance;
