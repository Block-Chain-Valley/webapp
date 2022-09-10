import React from 'react';
import styles from './Day.module.css';

const Day = props => {
  const temp = 0;

  return <div className={`${styles.number} ${props.isThisMonth ? '' : styles.subNumber}`}>{props.children}</div>;
};

export default Day;
