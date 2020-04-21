import authActions from './modules/auth/actions';
import caseActions from './modules/case/actions';
import locationsActions from './modules/locations/actions';
import reportsActions from './modules/reports/actions';
import userActions from './modules/user/actions';

const rootActions = (dispatch, state) => ({
  ...authActions(dispatch, state),
  ...caseActions(dispatch, state),
  ...locationsActions(dispatch, state),
  ...reportsActions(dispatch, state),
  ...userActions(dispatch, state),
});

export default rootActions;
