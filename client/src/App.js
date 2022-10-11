import React, { useContext } from 'react';
import styles from './App.module.css';
import AuthContext from './store/auth-context';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

const App = () => {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <div className={styles.mainContainer}>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </div>
    </React.Fragment>
  );
};

export default App;
