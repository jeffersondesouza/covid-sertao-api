import React, { useContext, useState, useEffect } from 'react';

import { Context } from 'store/createContext';
import { Redirect } from 'react-router-dom';

const LoggedGuard = props => {
  const { children } = props;

  const [isVerifyingAuth, setIsVerifyingAuth] = useState(true);

  const {
    state: { auth },
    verifyToken,
  } = useContext(Context);


  useEffect(() => {
    if (auth.isLogged) {
      setIsVerifyingAuth(false);
    } else {
      verifyToken();
    }
  }, [auth.isLogged]);

  
  if (auth.tokenVerifyFail) {
    return <Redirect to="/" />;
  }

  if (!isVerifyingAuth && !auth.isLogged) {
    return <Redirect to="/" />;
  }

  if (!isVerifyingAuth && auth.isLogged) {
    return children;
  }

  return <div>Loading</div>;
};

export default LoggedGuard;
