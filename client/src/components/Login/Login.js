import { useState, useContext } from 'react';
import styles from './Login.module.css';
import logo from '../../assets/logoSymbolWithText.png';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';

const Login = () => {
  const DEFAULT_ADDRESS = '0x0000000000000000000000000000000000000000';
  const [address, setAddress] = useState(DEFAULT_ADDRESS);

  const authCtx = useContext(AuthContext);

  const loginHandler = () => {
    // address from some blockchain network api
    setAddress('0x00101010100010101010010101010');

    // if address load success, run below function
    authCtx.onLogin(address);
  };

  return (
    <main>
      <img className={styles.logo} src={logo} alt="Blockchain Valley Logo" />
      <Button onClick={loginHandler}>Connect wallet</Button>
    </main>
  );
};

export default Login;
