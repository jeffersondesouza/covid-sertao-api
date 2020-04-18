import authActions from './modules/auth/actions';
import locationsActions from './modules/locations/actions';
import userActions from './modules/user/actions';

const rootActions = (dispatch, state) => ({
  ...authActions(dispatch, state),
  ...locationsActions(dispatch, state),
  ...userActions(dispatch, state),
});

export default rootActions;
