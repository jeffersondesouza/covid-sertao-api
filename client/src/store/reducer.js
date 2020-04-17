import Switch from 'helpers/functions/Switch';

import auth from './modules/auth/ActionsTypes';

import * as login from './modules/auth/reducer/login';

function reducer(state = {}, action) {
  return Switch.on(action.type, state, action.payload)
    .case(auth.LOGIN_REQUEST, login.request)
    .case(auth.LOGIN_SUCCESS, login.success)
    .case(auth.LOGIN_FAILURE, login.failure)
    .default(state);
}

export default reducer;
