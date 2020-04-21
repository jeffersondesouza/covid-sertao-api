import * as Types from '../ActionsTypes';

import { request } from 'helpers/http';
import { updateReportQuery } from 'repository/reports';

import selectToken from 'store/selectors/selectToken';

const updateReport = (dispatch, state) => async report => {
  dispatch({ type: Types.UPDATE_REPORT_REQUEST });

  try {
    const token = selectToken(state);

    const { data } = await request(updateReportQuery({ token, data: report }));
    dispatch({ type: Types.UPDATE_REPORT_SUCCESS, payload: data });
  } catch (error) {
    console.log('error:', error);
    dispatch({ type: Types.UPDATE_REPORT_FAILURE });
  }
};

export default updateReport;
