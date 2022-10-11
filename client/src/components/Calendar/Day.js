import React from 'react';
import styles from './Day.module.css';

const Day = props => (
  <div className={styles.container}>
    <div
      className={`${styles.statePoint} 
        ${props.attendance === 'attend' ? styles.attend : ''}
        ${props.attendance === 'absence' ? styles.absence : ''}
        ${props.attendance === 'late' ? styles.late : ''}
      `}></div>

    <div
      className={`
        ${styles.number} 
        ${props.isThisMonth ? '' : styles.subNumber}
        ${props.isToday ? styles.inverted : ''}
      `}>
      {props.children}
    </div>
  </div>
);

export default Day;
