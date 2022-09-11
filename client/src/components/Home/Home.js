import { useContext, useState } from 'react';
import AuthContext from '../../store/auth-context';
import styles from './Home.module.css';
import Button from '../UI/Button/Button';
import Calendar from '../Calendar/Calendar';
import AttendCard from './AttendCard/AttendCard';
import PresenterCard from './PresenterCard/PresenterCard';

const Home = () => {
  const authCtx = useContext(AuthContext);
  const [showAttendState, setShowAttendState] = useState(true);
  const [attendState, setAttendState] = useState(0);

  const logoutHandler = () => {
    authCtx.onLogout();
  };

  return (
    <div className={styles.main}>
      <Calendar />
      {showAttendState ? <AttendCard attendState={attendState} /> : ''}
      <PresenterCard />
      <Button onClick={logoutHandler}>로그아웃</Button>
    </div>
  );
};

export default Home;
