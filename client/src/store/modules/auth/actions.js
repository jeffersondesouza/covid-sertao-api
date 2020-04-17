import { LOGIN_REQUEST } from './ActionsTypes';

const login = dispatch => params => {
  dispatch({ type: LOGIN_REQUEST, payload: params });
};

export default dispatch => ({
  login: login(dispatch),
});
