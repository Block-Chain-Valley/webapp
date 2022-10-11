import React, { useState, useEffect } from 'react';

const DEFAULT_ADDRESS = '0x0000000000000000000000000000000000000000';

const AuthContext = React.createContext({
  isLoggedIn: false,
  userAddress: DEFAULT_ADDRESS,
  onLogout: () => {},
  onLogin: address => {},
});

export const AuthContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAddress, setUserAddress] = useState(DEFAULT_ADDRESS);

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInfo === '1') {
      setIsLoggedIn(true);
      setUserAddress(localStorage.getItem('address'));
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userAddress');
    setIsLoggedIn(false);
  };

  const loginHandler = address => {
    localStorage.setItem('isLoggedIn', 1);
    localStorage.setItem('userAddress', address);
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userAddress, onLogout: logoutHandler, onLogin: loginHandler }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
