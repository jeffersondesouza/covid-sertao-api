import { UserCrew } from 'models';

export const request = (state, payload) => ({
  ...state,
  cases: {
    ...state.user,
    isLoadingUsers: true,
    users: [],
  },
});

export const success = (state, payload = []) => ({
  ...state,
  cases: {
    ...state.user,
    isLoadingUsers: false,
    users: payload.map(UserCrew),
  },
});

export const failure = (state, payload) => ({
  ...state,
  cases: {
    ...state.user,
    isLoadingUsers: false,
  },
});
