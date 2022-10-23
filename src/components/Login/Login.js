import { useContext } from "react";
import styles from "./Login.module.css";
import logo from "../../assets/logoSymbolWithText.png";
import AuthContext from "../../store/auth-context";
import Button from "../UI/Button/Button";

import * as KlipAPI from "../../api/UseKlip";

// // 수정해야함!!!!! 컴퓨터랑 휴대폰 확인하기 위한것임!!!!!!!!!!!!!!!!
const isMoblie = window.screen.width >= 500 ? false : true; // 1280 정도가 적당한듯

const Login = (props) => {
  const getUserData = async () => {
    KlipAPI.getAddress(async (address) => {
      authCtx.onLogin(address);
    });
  };

  const authCtx = useContext(AuthContext);

  const loginHandler = () => {
    getUserData();
  };

  return (
    <main>
      <img className={styles.logo} src={logo} alt="Blockchain Valley Logo" />
      {isMoblie ? (
        <Button onClick={loginHandler}>Connect wallet</Button>
      ) : (
        <div> 모바일에서 접속해주세요!! </div>
      )}
    </main>
  );
};

export default Login;
