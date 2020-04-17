import React, { useState, useReducer } from 'react';

import { Provider, Consumer } from './createContext';

import { LOGIN_REQUEST } from './ActionsTypes';
import reducer from './reducer';
import initialState from './state';

function init(st) {
  return st;
}

const actions = dispatch => {};

const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const login = params => {
    dispatch({ type: LOGIN_REQUEST, payload: params });
  };

  return (
    <Provider value={{ state, login }}>
      <Consumer>{() => props.children}</Consumer>
    </Provider>
  );
};

export default ContextProvider;
