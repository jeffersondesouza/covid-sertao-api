export const request = (state, payload) => ({
  ...state,
  auth: {
    ...state.auth,
    isLoggingIn: true,
    isLogged: false,
  },
});

export const success = (state, payload) => ({
  ...state,
  auth: {
    ...state.auth,
    isLoggingIn: false,
    isLogged: true,
  },
});

export const failure = (state, payload) => ({
  ...state,
  auth: {
    ...state.auth,
    isLoggingIn: false,
    isLogged: false,
  },
});
