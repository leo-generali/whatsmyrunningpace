import React, { Component } from 'react';
import TimeField from 'react-simple-timefield';

class InputTime extends Component {
  render() {
    return (
      <div>
        <TimeField
          value={this.props.inputTime}
          onChange={this.props.handleTimeInput}
          showSeconds={true}
        />
      </div>
    );
  }
}

export default InputTime;
