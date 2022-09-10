import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import styles from './Home.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Calendar from '../Calendar/Calendar';

const Home = () => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.onLogout();
  };

  return (
    <div className={styles.main}>
      <Calendar />
      <Card>
        <div className={styles.title}>오늘의 출결</div>
      </Card>
      <Card>
        <div className={styles.title}>오늘의 발표자</div>
      </Card>
      <Button onClick={logoutHandler}>로그아웃</Button>
    </div>
  );
};

export default Home;
