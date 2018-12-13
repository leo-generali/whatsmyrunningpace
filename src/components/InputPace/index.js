import React, { Component } from 'react';
import TimeField from 'react-simple-timefield';

class InputPace extends Component {
  render() {
    return (
      <div>
        <TimeField
          value={this.props.inputPace}
          onChange={this.props.handlePaceInput}
        />
      </div>
    );
  }
}

export default InputPace;
