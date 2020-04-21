import moment from 'moment';
import { CaseNotification } from 'models';



export const request = (state, payload) => ({
  ...state,
  reports: {
    ...state.reports,
    isLoadingReports: true,
    city: {},
    uf: {},
    country: {},
  },
});

export const success = (state, payload = {}) => {
  return {
    ...state,
    reports: {
      ...state.reports,
      isLoadingReports: false,
      city: payload.city,
      uf: payload.uf,
      country: payload.country,
    },
  };
};

export const failure = (state, payload) => ({
  ...state,
  reports: {
    ...state.reports,
    isLoadingReports: false,
  },
});
