export const request = (state, payload) => ({
  ...state,
  user: {
    ...state.user,
    isSavingUser: true,
    saveUserSuccess: false,
    saveUserFail: false,
  },
});

export const success = (state, payload) => ({
  ...state,
  user: {
    ...state.user,
    isSavingUser: false,
    saveUserSuccess: true,
    saveUserFail: false,
  },
});

export const failure = (state, payload) => ({
  ...state,
  user: {
    ...state.user,
    isSavingUser: false,
    saveUserSuccess: false,
    saveUserFail: true,
  },
});
