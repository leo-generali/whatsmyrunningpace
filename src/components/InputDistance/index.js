import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
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
        <Dropdown
          options={DISTANCE_OPTIONS}
          onChange={this.props.setDistanceWithDropdown}
        />
      </div>
    );
  }
}

export default InputDistance;
