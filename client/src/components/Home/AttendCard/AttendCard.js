import styles from './AttendCard.module.css';
import Card from '../../UI/Card/Card';

// 0 : 미체크, 1 : 출석, 2 : 지각, 3: 결석
const attendCheck = [
  { state: '미체크', style: styles.blue },
  { state: '출석', style: styles.green },
  { state: '지각', style: styles.yellow },
  { state: '결석', style: styles.red },
];

const AttendCard = props => {
  const temp = 0;

  return (
    <Card className={styles.container}>
      <div className={styles.title}>오늘의 출결</div>
      <div className={`${styles.attendTxt} ${attendCheck[props.attendState].style} `}>
        {attendCheck[props.attendState].state}
      </div>
    </Card>
  );
};

export default AttendCard;
