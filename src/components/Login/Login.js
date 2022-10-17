import { useState, useContext, useEffect } from "react";
import styles from "./Login.module.css";
import logo from "../../assets/logoSymbolWithText.png";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import { DEFAULT_ADDRESS } from "../../constants/index.js";

const ethers = require("ethers");

const Login = () => {
  const authCtx = useContext(AuthContext);

  const ethers = require("ethers");
  const [isConnected, setIsConnected] = useState(true);
  const [signer, setSigner] = useState();

  const loginHandler = () => {
    wallecConnect();
  };

  async function wallecConnect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);
        let connectedProvider = new ethers.providers.Web3Provider(
          window.ethereum
        );
        setSigner(connectedProvider.getSigner());
        connectedProvider
          .getSigner()
          .getAddress()
          .then((_address) => {
            setIsConnected(authCtx.onLogin(_address));
          });
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }

  return (
    <main>
      <img className={styles.logo} src={logo} alt="Blockchain Valley Logo" />
      {isConnected ? null : <div> Chrome 브라우저에서 다시 시도해 주세요!</div>}
      <Button onClick={loginHandler}>Connect wallet</Button>
    </main>
  );
};

export default Login;
