import cleanUp from './cleanUp';
import loadReport from './loadReport';
import saveReport from './saveReport';
import updateReport from './updateReport';

export default (dispatch, state) => ({
  cleanUp: cleanUp(dispatch, state),
  loadReport: loadReport(dispatch, state),
  saveReport: saveReport(dispatch, state),
  updateReport: updateReport(dispatch, state),
});
