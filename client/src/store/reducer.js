import Switch from 'helpers/functions/Switch';

import * as authTypes from './modules/auth/ActionsTypes';

import * as login from './modules/auth/reducer/login';
import * as verifyToken from './modules/auth/reducer/verifyToken';

function reducer(state = {}, action) {
  return Switch.on(action.type, state, action.payload)
    .case(authTypes.LOGIN_REQUEST, login.request)
    .case(authTypes.LOGIN_SUCCESS, login.success)
    .case(authTypes.LOGIN_FAILURE, login.failure)
    .case(authTypes.VERIFY_TOKEN_REQUEST, verifyToken.request)
    .case(authTypes.VERIFY_TOKEN_SUCCESS, verifyToken.success)
    .case(authTypes.VERIFY_TOKEN_FAILURE, verifyToken.failure)
    .default(state);
}

export default reducer;
