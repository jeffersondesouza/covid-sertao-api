import saveUser from './saveUser';

export default (dispatch, state) => ({
  saveUser: saveUser(dispatch, state),
});
