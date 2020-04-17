import React, { useState, useReducer } from 'react';

import { Provider, Consumer } from './createContext';

import reducer from './reducer';
import initialState from './state';
import rootActions from './rootActions';

function init(st) {
  return st;
}

const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  return (
    <Provider value={{ state, ...rootActions(dispatch), dispatch }}>
      <Consumer>{() => props.children}</Consumer>
    </Provider>
  );
};

export default ContextProvider;
