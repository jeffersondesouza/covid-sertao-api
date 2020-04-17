import authActions from './modules/auth/actions';

const rootActions = dispatch => ({
  ...authActions(dispatch),
});

export default rootActions;
