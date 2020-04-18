export const request = (state, payload) => ({
  ...state,
  location: {
    ...state.location,
    isLoadingUfs: true,
    ufs: [],
  },
});

export const success = (state, payload) => ({
  ...state,
  location: {
    ...state.location,
    isLoadingUfs: false,
    ufs: [...payload],
  },
});

export const failure = (state, payload) => ({
  ...state,
  location: {
    ...state.location,
    isLoadingUfs: false,
  },
});
