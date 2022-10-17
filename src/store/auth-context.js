import React, { useState, useEffect } from "react";

import { DEFAULT_ADDRESS } from "../constants";

const AuthContext = React.createContext({
  isLoggedIn: false,
  userAddress: DEFAULT_ADDRESS,
  onLogout: () => {},
  onLogin: (address) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAddress, setUserAddress] = useState(DEFAULT_ADDRESS);

  useEffect(() => {
    loginCheck();
  }, []);

  const loginCheck = () => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInfo === "1") {
      setIsLoggedIn(true);
      setUserAddress(localStorage.getItem("address"));
    }
  };

  const logoutHandler = () => {
    console.log("logout!");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userAddress");
    setIsLoggedIn(false);
  };

  const loginHandler = (address) => {
    if (address === DEFAULT_ADDRESS) {
      console.log("login fail");
      return false;
    }
    console.log("login address :", address);
    localStorage.setItem("isLoggedIn", 1);
    localStorage.setItem("userAddress", address);
    setIsLoggedIn(true);
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userAddress,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
