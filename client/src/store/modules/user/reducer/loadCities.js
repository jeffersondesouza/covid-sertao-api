export const request = (state, payload) => ({
  ...state,
  location: {
    ...state.location,
    isLoadingCities: true,
    cities: [],
  },
});

export const success = (state, payload) => ({
  ...state,
  location: {
    ...state.location,
    isLoadingCities: false,
    cities: [...payload],
  },
});

export const failure = (state, payload) => ({
  ...state,
  location: {
    ...state.location,
    isLoadingCities: false,
  },
});
