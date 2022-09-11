import styles from './PresenterCard.module.css';
import Card from '../../UI/Card/Card';

const PresenterCard = () => {
  const temp = 0;

  return (
    <Card>
      <div className={styles.title}>오늘의 발표자</div>
    </Card>
  );
};

export default PresenterCard;
