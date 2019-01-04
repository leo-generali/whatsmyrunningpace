import React, { Component } from 'react';
import TimeField from 'react-simple-timefield';
import { distanceToString } from '../../helpers/display';

class InputPace extends Component {
  render() {
    return (
      <div>
        <label for="pace">Pace:</label>
        <TimeField
          name="pace"
          value={this.props.inputPace}
          onChange={this.props.handlePaceInput}
        />
        <button onClick={this.props.changePaceUnit}>Change Unit</button>
        {distanceToString(this.props.unitPace)}
      </div>
    );
  }
}

export default InputPace;
