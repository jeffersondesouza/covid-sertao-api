import saveUser from './saveUser';
import cleanUp from './cleanUp';

export default (dispatch, state) => ({
  saveUser: saveUser(dispatch, state),
  cleanUpUser: cleanUp(dispatch),
});
