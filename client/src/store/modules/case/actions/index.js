import saveCase from './saveCase';
import loadCases from './loadCases';
import cleanUp from './cleanUp';
import updateCase from './updateCase';

export default (dispatch, state) => ({
  saveCase: saveCase(dispatch, state),
  loadCases: loadCases(dispatch, state),
  updateCase: updateCase(dispatch, state),
  cleanUpCases: cleanUp(dispatch),
});
