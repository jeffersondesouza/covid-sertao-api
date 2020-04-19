import * as Types from '../ActionsTypes';

import { request } from 'helpers/http';
import { loadCrewUsersQuery } from 'repository/user';

import selectToken from 'store/selectors/selectToken';

const loadUsers = (dispatch, state) => async () => {
  dispatch({ type: Types.LOAD_CASES_REQUEST });

  try {
    const token = selectToken(state);

    const { data } = await request(loadCrewUsersQuery({ token }));

    dispatch({ type: Types.LOAD_CASES_SUCCESS, payload: data });
  } catch (error) {
    console.log('error:', error);
    dispatch({ type: Types.LOAD_CASES_FAILURE });
  }
};

export default loadUsers;
