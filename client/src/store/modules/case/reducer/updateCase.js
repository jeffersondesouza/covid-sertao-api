export const request = (state, payload) => ({
  ...state,
  cases: {
    ...state.user,
    isDeletingUser: true,
    deleteUserSuccess: false,
    deleteUserFail: false,
  },
});

export const success = (state, payload) => ({
  ...state,
  cases: {
    ...state.user,
    isDeletingUser: false,
    deleteUserSuccess: true,
    deleteUserFail: false,
  },
});

export const failure = (state, payload) => ({
  ...state,
  cases: {
    ...state.user,
    isDeletingUser: false,
    deleteUserSuccess: false,
    deleteUserFail: true,
  },
});
