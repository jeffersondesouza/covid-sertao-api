import Switch from 'helpers/functions/Switch';

import { LOGIN_REQUEST } from './modules/auth/ActionsTypes';
import { loginRequest } from './modules/auth/rerducer/login';

function reducer(state = {}, action) {
  return Switch.on(action.type, state, action.payload)
    .case(LOGIN_REQUEST, loginRequest)
    .default(state);
}

export default reducer;
