import * as Types from '../ActionsTypes';

import { request } from 'helpers/http';
import { loadReportQuery } from 'repository/reports';

import selectToken from 'store/selectors/selectToken';

const loadReports = (dispatch, state) => async () => {
  dispatch({ type: Types.LOAD_REPORTS_REQUEST });

  try {
    const token = selectToken(state);
    console.log('token:', token)

    const { data } = await request(loadReportQuery({ token }));

    dispatch({ type: Types.LOAD_REPORTS_SUCCESS, payload: data });
  } catch (error) {
    console.log('error:', error);
    dispatch({ type: Types.LOAD_REPORTS_FAILURE });
  }
};

export default loadReports;
