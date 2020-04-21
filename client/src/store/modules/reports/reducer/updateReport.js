export const request = (state, payload) => ({
  ...state,
  reports: {
    ...state.reports,
    isUploadingReport: true,
    uploadReportSuccess: false,
    uploadReportFail: false,
  },
});

export const success = (state, payload) => ({
  ...state,
  reports: {
    ...state.reports,
    isUploadingReport: false,
    uploadReportSuccess: true,
    uploadReportFail: false,
  },
});

export const failure = (state, payload) => ({
  ...state,
  reports: {
    ...state.reports,
    isUploadingReport: false,
    uploadReportSuccess: false,
    uploadReportFail: true,
  },
});
