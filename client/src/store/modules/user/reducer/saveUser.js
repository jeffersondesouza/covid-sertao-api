export const request = (state, payload) => ({
  ...state,
  location: {
    ...state.location,
    isSavingUser: true,
    saveUserSuccess: false,
    saveUserFail: false,
  },
});

export const success = (state, payload) => ({
  ...state,
  location: {
    ...state.location,
    isSavingUser: false,
    saveUserSuccess: true,
    saveUserFail: false,
  },
});

export const failure = (state, payload) => ({
  ...state,
  location: {
    ...state.location,
    isSavingUser: false,
    saveUserSuccess: false,
    saveUserFail: true,
  },
});
