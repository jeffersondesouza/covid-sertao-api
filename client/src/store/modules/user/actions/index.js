import saveUser from './saveUser';
import cleanUp from './cleanUp';
import loadUsers from './loadUsers';
import deleteCrewUser from './deleteCrewUser';

export default (dispatch, state) => ({
  saveUser: saveUser(dispatch, state),
  loadUsers: loadUsers(dispatch, state),
  deleteCrewUser: deleteCrewUser(dispatch, state),
  cleanUpUser: cleanUp(dispatch),
});
