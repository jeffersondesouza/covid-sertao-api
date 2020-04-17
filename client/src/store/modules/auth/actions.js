import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './ActionsTypes';

import { TOKEN, CURRENT_USER } from 'enums/cookiesKeys';
import { request } from 'helpers/http';
import CoookieStore from 'helpers/cookie-store';
import { loginQuery } from 'repository';
import cookieStore from 'helpers/cookie-store';

cookieStore.init(document);

const login = dispatch => async params => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const { data } = await request(loginQuery(params));

    cookieStore.set({ key: TOKEN, data: data.token });

    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE });
  }
};

export default dispatch => ({
  login: login(dispatch),
});
