import styles from './NotificationModal.module.css';
import Card from '../Card/Card';
import checkIcon from '../../../assets/checkIcon.svg';

const NotificationModal = props => (
  <Card className={styles.container}>
    <img className={styles.icon} src={checkIcon} alt="check icon" />
    <div className={styles.text}>{props.message}</div>
  </Card>
);

export default NotificationModal;
