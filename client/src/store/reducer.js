import Switch from 'helpers/functions/Switch';

import { LOGIN_REQUEST } from "./ActionsTypes";

function reducer(state = {}, action) {
  return Switch.on(action.type)
    .case(LOGIN_REQUEST, { count: state.count + 1 })
    .default(state);
}

export default reducer;
