import { useState, useContext } from "react";
import styles from "./Login.module.css";
import logo from "../../assets/logoSymbolWithText.png";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

// klip api test
import * as KlipAPI from "../../api/UseKlip";
import QRCode from "qrcode.react";
import { DEFAULT_ADDRESS } from "../../constants";

const Login = (props) => {
  //--------------------- klip api test! ---------------------
  const [qrvalue, setQrvalue] = useState(QRCode.default);

  const [myAddress, setMyAddress] = useState(DEFAULT_ADDRESS);
  const [showQR, setShowQR] = useState(false);

  const getUserData = async () => {
    KlipAPI.getAddress(setQrvalue, async (address) => {
      authCtx.onLogin(address);
      setMyAddress(address);
    });
    setShowQR(true);
  };
  //--------------------- klip api test! ---------------------

  const authCtx = useContext(AuthContext);

  // const ethers = require("ethers");
  // const [signer, setSigner] = useState();
  // const [isConnected ,setIsConnected] = useState(false)
  const loginHandler = () => {
    // wallecConnect();
    getUserData();
  };

  // async function wallecConnect() {
  //   if (typeof window.ethereum !== "undefined") {
  //     try {
  //       await window.ethereum.request({ method: "eth_requestAccounts" });
  //       setIsConnected(true);
  //       let connectedProvider = new ethers.providers.Web3Provider(
  //         window.ethereum
  //       );
  //       // setSigner(connectedProvider.getSigner());
  //       connectedProvider
  //         .getSigner()
  //         .getAddress()
  //         .then((_address) => {
  //           setIsConnected(authCtx.onLogin(_address));
  //         });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   } else {
  //     setIsConnected(false);
  //   }
  // }

  return (
    <main>
      <img className={styles.logo} src={logo} alt="Blockchain Valley Logo" />
      {/* {authCtx.isConnected ? null : <div> Chrome 브라우저에서 다시 시도해 주세요!</div>} */}
      <Button onClick={loginHandler}>Connect wallet</Button>
      {showQR ? (
        <QRCode
          value={qrvalue}
          size={100}
          bgColor="#7FBC7F"
          style={{ margin: "20px" }}
        ></QRCode>
      ) : null}{" "}
      <div>{myAddress}</div>
    </main>
  );
};

export default Login;
