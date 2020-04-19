import * as Types from '../ActionsTypes';

import { request } from 'helpers/http';
import { saveCaseQuery } from 'repository/case';

import selectToken from 'store/selectors/selectToken';

const saveCase = (dispatch, state) => async newCase => {
  dispatch({ type: Types.SAVE_CASE_REQUEST });

  try {
    const token = selectToken(state);

    const { data } = await request(saveCaseQuery({ token, data: newCase }));
    dispatch({ type: Types.SAVE_CASE_SUCCESS, payload: data });
  } catch (error) {
    console.log('error:', error);
    dispatch({ type: Types.SAVE_CASE_FAILURE });
  }
};

export default saveCase;
