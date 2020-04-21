export const request = (state, payload) => ({
  ...state,
  cases: {
    ...state.cases,
    isDeletingUser: true,
    deleteUserSuccess: false,
    deleteUserFail: false,
  },
});

export const success = (state, payload) => ({
  ...state,
  cases: {
    ...state.cases,
    isDeletingUser: false,
    deleteUserSuccess: true,
    deleteUserFail: false,
  },
});

export const failure = (state, payload) => ({
  ...state,
  cases: {
    ...state.cases,
    isDeletingUser: false,
    deleteUserSuccess: false,
    deleteUserFail: true,
  },
});
