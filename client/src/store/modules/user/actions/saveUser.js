import * as Types from '../ActionsTypes';

import { request } from 'helpers/http';
import { saveUserQuery } from 'repository/user';

import selectToken from 'store/selectors/selectToken';

const saveUser = (dispatch, state) => async (user) => {
  console.log('user:', user)
  dispatch({ type: Types.SAVE_USER_REQUEST });

  try {
    const token = selectToken(state);

    const { data } = await request(saveUserQuery({ token }));
    dispatch({ type: Types.SAVE_USER_SUCCESS, payload: data });
  } catch (error) {
    console.log('error:', error);
    dispatch({ type: Types.SAVE_USER_FAILURE });
  }
};

export default saveUser;
