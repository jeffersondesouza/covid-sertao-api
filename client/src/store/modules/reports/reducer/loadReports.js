import moment from 'moment';
import { CaseNotification } from 'models';

const byRegisterAt = (itemA, itemB) => {
  const momentA = moment(itemA.registeredAt);
  const momentB = moment(itemB.registeredAt);

  return momentB.diff(momentA, 'seconds');
};

export const request = (state, payload) => ({
  ...state,
  reports: {
    ...state.reports,
    isLoadingReports: true,
    cityReport: {},
  },
});

export const success = (state, payload = []) => {
  const sortedCases = [...payload].sort(byRegisterAt);

  return {
    ...state,
    reports: {
      ...state.reports,
      isLoadingReports: false,
      cityReport: payload,
    },
  };
};

export const failure = (state, payload) => ({
  ...state,
  reports: {
    ...state.reports,
    isLoadingReports: false,
    cityReport: {},
  },
});
