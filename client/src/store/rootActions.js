import authActions from './modules/auth/actions';
import locationsActions from './modules/locations/actions';

const rootActions = (dispatch, state) => ({
  ...authActions(dispatch, state),
  ...locationsActions(dispatch, state),
});

export default rootActions;
