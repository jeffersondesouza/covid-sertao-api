import authActions from './modules/auth/actions';
import locationsActions from './modules/locations/actions';
import userActions from './modules/user/actions';
import caseActions from './modules/case/actions';

const rootActions = (dispatch, state) => ({
  ...authActions(dispatch, state),
  ...locationsActions(dispatch, state),
  ...userActions(dispatch, state),
  ...caseActions(dispatch, state),
});

export default rootActions;
