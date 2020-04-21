export const cleanUp = (state, payload) => ({
  ...state,
  reports: {
    ...state.reports,
    isSavingReport: false,
    saveReportSuccess: false,
    saveReportFail: false,
    deleteReportSuccess: false,
    deleteReportFail: false,
  },
});

export const request = (state, payload) => ({
  ...state,
  reports: {
    ...state.reports,
    isSavingReport: true,
    saveReportSuccess: false,
    saveReportFail: false,
  },
});

export const success = (state, payload) => ({
  ...state,
  reports: {
    ...state.reports,
    isSavingReport: false,
    saveReportSuccess: true,
    saveReportFail: false,
  },
});

export const failure = (state, payload) => ({
  ...state,
  reports: {
    ...state.reports,
    isSavingReport: false,
    saveReportSuccess: false,
    saveReportFail: true,
  },
});
