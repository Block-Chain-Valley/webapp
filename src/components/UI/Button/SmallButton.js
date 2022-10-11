import styles from './SmallButton.module.css';

// 0: 비활성화, 1: 발표 증명 요청, 2: 투표 중, 3: 증명 완료, 4:증명 실패, 5: 발표자 확인, 6: 확인 완료
// 완전 컴포넌트로 분리
const buttonState = [
  { state: '비활성화', style: styles.hide },
  { state: '발표 증명 요청', style: styles.default },
  { state: '투표 중', style: styles.inverted },
  { state: '증명 완료', style: styles.success },
  { state: '증명 실패', style: styles.fail },
  { state: '발표자 확인', style: styles.default },
  { state: '확인 완료', style: styles.disabled },
];

const SmallButton = props => (
  <button
    type={props.type || 'button'}
    className={`${styles.button} ${props.state === undefined ? '' : buttonState[props.state].style} `}
    onClick={props.onClick}
    disabled={props.disabled}>
    {`${props.children !== undefined ? props.children : buttonState[props.state].state}`}
  </button>
);

export default SmallButton;
