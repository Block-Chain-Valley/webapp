import { useState } from 'react';
import styles from './PresenterCard.module.css';
import Card from '../../UI/Card/Card';
import SmallButtion from '../../UI/Button/SmallButton';

const PresenterCard = props => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const requestHandler = () => {
    props.notificationHandler('발표 증명 요청!');
    props.setVotingState(2);
    setBtnDisabled(true);
  };

  return (
    <Card>
      <div className={styles.title}>오늘의 발표자</div>
      <div className={styles.subContainer}>
        <div className={styles.name}>{props.presenterName}</div>
        <SmallButtion state={props.votingState} onClick={requestHandler} disabled={btnDisabled}></SmallButtion>
      </div>
    </Card>
  );
};

export default PresenterCard;
