import * as Types from '../ActionsTypes';

import { request } from 'helpers/http';
import { saveReportQuery } from 'repository/reports';

import selectToken from 'store/selectors/selectToken';

const saveReport = (dispatch, state) => async newCase => {
  dispatch({ type: Types.SAVE_REPORT_REQUEST });

  try {
    const token = selectToken(state);

    const { data } = await request(saveReportQuery({ token, data: newCase }));
    dispatch({ type: Types.SAVE_REPORT_SUCCESS, payload: data });
  } catch (error) {
    console.log('error:', error);
    dispatch({ type: Types.SAVE_REPORT_FAILURE });
  }
};

export default saveReport;
