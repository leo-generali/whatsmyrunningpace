import React from 'react';

// Components
import InputDistance from '../InputDistance';
import InputTime from '../InputTime';
import InputPace from '../InputPace';

// Extra

import styles from './styles.module.css';

const View = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.calcContainer}>
        <InputPace {...props} />
        <InputDistance {...props} />
        <InputTime {...props} />
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.paceButton} onClick={props.setPace}>
          Get Pace
        </button>
        <button className={styles.distanceButton} onClick={props.setDistance}>
          Get Distance
        </button>
        <button className={styles.timeButton} onClick={props.setTime}>
          Get Time
        </button>
      </div>
    </div>
  );
};

export default View;
