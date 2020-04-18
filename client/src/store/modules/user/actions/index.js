import saveUser from './saveUser';
import cleanUp from './cleanUp';
import loadUsers from './loadUsers';

export default (dispatch, state) => ({
  saveUser: saveUser(dispatch, state),
  loadUsers: loadUsers(dispatch, state),
  deleteCrewUser: loadUsers(dispatch, state),
  cleanUpUser: cleanUp(dispatch),
});
