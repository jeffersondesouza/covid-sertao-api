import { CurrentUser } from 'models';
import INITAL_STATE from './../../../state';

export const logout = state => INITAL_STATE;

export const request = (state, payload) => ({
  ...state,
  auth: {
    ...state.auth,
    isLoggingIn: true,
    isLogged: false,
    tokenVerifyFail: false,
  },
});

export const success = (state, payload) => {
  return {
    ...state,
    auth: {
      ...state.auth,
      token: payload.token,
      currentUser: CurrentUser(payload),
      isLoggingIn: false,
      isLogged: true,
    },
  };
};

export const failure = (state, payload) => ({
  ...state,
  auth: {
    ...state.auth,
    isLoggingIn: false,
    isLogged: false,
  },
});
