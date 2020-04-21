import * as Types from '../ActionsTypes';

import { request } from 'helpers/http';
import { loadCasesQuery } from 'repository/case';

import selectToken from 'store/selectors/selectToken';

const loadUsers = (dispatch, state) => async () => {
  dispatch({ type: Types.LOAD_REPORTS_REQUEST });

  try {
    const token = selectToken(state);

    const { data } = await request(loadCasesQuery({ token }));

    dispatch({ type: Types.LOAD_REPORTS_SUCCESS, payload: data });
  } catch (error) {
    console.log('error:', error);
    dispatch({ type: Types.LOAD_REPORTS_FAILURE });
  }
};

export default loadUsers;
