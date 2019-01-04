import React, { Component } from 'react';
import TimeField from 'react-simple-timefield';

class InputTime extends Component {
  render() {
    return (
      <div>
        <label for="time">Time:</label>
        <TimeField
          name="time"
          value={this.props.inputTime}
          onChange={this.props.handleTimeInput}
          showSeconds={true}
        />
      </div>
    );
  }
}

export default InputTime;
