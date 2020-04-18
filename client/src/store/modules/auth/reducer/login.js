export const logout = state => ({
  auth: {
    role: 3,
  },
  case: {},
  location: {},
  member: {},
});

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
  console.log('payload:', payload)

  return {
    ...state,
    auth: {
      ...state.auth,
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
