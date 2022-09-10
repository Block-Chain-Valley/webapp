import React from 'react';
import styles from './Card.module.css';

const Card = props => <div className={styles.container}>{props.children}</div>;

export default Card;
