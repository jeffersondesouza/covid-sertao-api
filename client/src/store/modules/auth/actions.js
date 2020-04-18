import * as Types from './ActionsTypes';

import { TOKEN, CURRENT_USER } from 'enums/cookiesKeys';
import { request } from 'helpers/http';
import CoookieStore from 'helpers/cookie-store';
import cookieStore from 'helpers/cookie-store';
import { loginQuery, verifyTokenQuery } from 'repository';

cookieStore.init(document);

const login = dispatch => async params => {
  dispatch({ type: Types.LOGIN_REQUEST });

  try {
    const { data } = await request(loginQuery(params));

    cookieStore.set({ key: TOKEN, data: data.token });

    dispatch({ type: Types.LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: Types.LOGIN_FAILURE });
  }
};

const verifyToken = dispatch => async () => {
  dispatch({ type: Types.VERIFY_TOKEN_REQUEST });

  try {
    const token = cookieStore.get({ key: TOKEN });
    if (!token) {
      dispatch({ type: Types.VERIFY_TOKEN_FAILURE });
    }

    const { data } = await request(verifyTokenQuery({ token }));
    dispatch({ type: Types.LOGIN_SUCCESS, payload: data });
    dispatch({ type: Types.VERIFY_TOKEN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: Types.VERIFY_TOKEN_FAILURE });
  }
};

const logout = dispatch => async () => {
  dispatch({ type: Types.LOGOUT });
  const token = cookieStore.deleteMany([TOKEN]);
};

export default dispatch => ({
  login: login(dispatch),
  verifyToken: verifyToken(dispatch),
  logout: logout(dispatch),
});
