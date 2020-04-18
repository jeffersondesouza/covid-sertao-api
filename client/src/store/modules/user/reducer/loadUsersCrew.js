export const request = (state, payload) => ({
  ...state,
  user: {
    ...state.user,
    isLoadingUsers: true,
    users: [],
  },
});

export const success = (state, payload) => ({
  ...state,
  user: {
    ...state.user,
    isLoadingUsers: false,
    users: [...payload],
  },
});

export const failure = (state, payload) => ({
  ...state,
  user: {
    ...state.user,
    isLoadingUsers: false,
  },
});
