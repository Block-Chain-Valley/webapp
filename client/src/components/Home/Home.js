import { useContext, useState, useEffect } from 'react';
import AuthContext from '../../store/auth-context';
import styles from './Home.module.css';
import Calendar from '../Calendar/Calendar';
import AttendCard from './AttendCard/AttendCard';
import PresenterCard from './PresenterCard/PresenterCard';
import SmallButton from '../UI/Button/SmallButton';
import NotificationModal from '../UI/NotificationModal/NotificationModal';

const Home = () => {
  const authCtx = useContext(AuthContext);
  const [showAttendState, setShowAttendState] = useState(true);
  const [showPresenter, setShowPresenter] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  const [attendState, setAttendState] = useState(0); // 0 : 미체크, 1 : 출석, 2 : 지각, 3: 결석
  const [votingState, setVotingState] = useState(1); // 0: 비활성화, 1: 발표 증명 요청, 2: 투표 중, 3: 증명 완료, 4:증명 실패, 5: 발표자 확인, 6: 확인 완료
  const [presenterName, setPresenterName] = useState('조인우');

  const [notificationMessage, setNofiticationMessage] = useState('');

  const logoutHandler = () => {
    authCtx.onLogout();
  };

  const notificationHandler = message => {
    setNofiticationMessage(message);
    setShowNotification(true);
  };

  useEffect(() => {
    setTimeout(() => setShowNotification(false), 6000);
  }, []);

  return (
    <div className={styles.main}>
      {showNotification ? <NotificationModal message={notificationMessage} /> : ''}
      <Calendar />
      {showAttendState ? <AttendCard attendState={attendState} /> : ''}
      {showPresenter ? <PresenterCard presenterName={presenterName} votingState={votingState} /> : ''}
      <SmallButton onClick={logoutHandler}>로그아웃</SmallButton>
      <SmallButton onClick={() => notificationHandler('출석 완료!')}>알림 테스트용 버튼</SmallButton>
    </div>
  );
};

export default Home;
