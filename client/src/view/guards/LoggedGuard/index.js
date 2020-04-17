import React, { useContext } from 'react';

import { Context } from 'store/createContext';

const LoggedGuard = props => {
  const { children } = props;

  const {
    state: { auth },
  } = useContext(Context);

  return children;
};

export default LoggedGuard;
