import { UserCrew } from 'models';

export const request = (state, payload) => ({
  ...state,
  cases: {
    ...state.user,
    isLoadingCases: true,
    caseNotifications: [],
  },
});

export const success = (state, payload = []) => ({
  ...state,
  cases: {
    ...state.user,
    isLoadingCases: false,
    caseNotifications: payload.map(item => item),
  },
});

export const failure = (state, payload) => ({
  ...state,
  cases: {
    ...state.user,
    isLoadingCases: false,
  },
});
