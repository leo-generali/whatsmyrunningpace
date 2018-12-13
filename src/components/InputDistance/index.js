import React, { Component } from 'react';

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
      </div>
    );
  }
}

export default InputDistance;
