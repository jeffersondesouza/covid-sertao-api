export const request = (state, payload) => ({
  ...state,
  auth: {
    ...state.auth,
    isVerifyingToken: true,
    tokenVerifyFail: false,
  },
});

export const success = (state, payload) => ({
  ...state,
  auth: {
    ...state.auth,
    isVerifyingToken: false,
    isLogged: true,
  },
});

export const failure = (state, payload) => ({
  ...state,
  auth: {
    ...state.auth,
    isVerifyingToken: false,
    tokenVerifyFail: true,
    isLogged: false,
  },
});
