import moment from 'moment';
import { CaseNotification } from 'models';

const byRegisterAt = (itemA, itemB) => {
  const momentA = moment(itemA.registeredAt);
  const momentB = moment(itemB.registeredAt);

  return momentB.diff(momentA, 'seconds');
};

export const request = (state, payload) => ({
  ...state,
  cases: {
    ...state.user,
    isLoadingCases: true,
    caseNotifications: [],
    lastCasesNotifications: [],
  },
});

export const success = (state, payload = []) => {
  const sortedCases = [...payload].sort(byRegisterAt);

  return {
    ...state,
    cases: {
      ...state.user,
      isLoadingCases: false,
      caseNotifications: sortedCases.map(CaseNotification),
      lastCasesNotifications: sortedCases.map(CaseNotification).slice(0, 10),
    },
  };
};

export const failure = (state, payload) => ({
  ...state,
  cases: {
    ...state.user,
    isLoadingCases: false,
  },
});
