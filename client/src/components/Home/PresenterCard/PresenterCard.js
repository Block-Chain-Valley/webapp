import styles from './PresenterCard.module.css';
import Card from '../../UI/Card/Card';
import SmallButtion from '../../UI/Button/SmallButton';

const PresenterCard = props => (
  <Card>
    <div className={styles.title}>오늘의 발표자</div>
    <div className={styles.subContainer}>
      <div className={styles.name}>{props.presenterName}</div>
      <SmallButtion state={props.votingState}></SmallButtion>
    </div>
  </Card>
);

export default PresenterCard;
