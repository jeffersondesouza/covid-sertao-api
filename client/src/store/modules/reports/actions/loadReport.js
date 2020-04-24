import * as Types from '../ActionsTypes';

import { request } from 'helpers/http';
import {
  loadCityReportQuery,
  loadUfReportQuery,
  loadCountryReportQuery,
} from 'repository/reports';

import selectToken from 'store/selectors/selectToken';
import selectCurrentUser from 'store/selectors/selectCurrentUser';

const loadReports = (dispatch, state) => async (payload = {}) => {
  dispatch({ type: Types.LOAD_REPORTS_REQUEST });

  try {
    const token = selectToken(state);
    const { uf, city } = selectCurrentUser(state);

    let ufReport = {};
    let cityReport = {};
    let countryReport = {};

    if (!payload.uf || !payload.city) {
      const countryRes = await request(loadCountryReportQuery({ token }));
      countryReport = countryRes.data;
    }

    if (uf || payload.uf) {
      const ufRes = await request(
        loadUfReportQuery({ token, uf: uf._id || payload.uf })
      );
      ufReport = ufRes.data;
    }

    if ((uf && city) || (payload.uf && payload.city)) {
      const cityRes = await request(
        loadCityReportQuery({
          token,
          uf: uf._id || payload.uf,
          city: city._id || payload.city,
        })
      );
      cityReport = cityRes.data;
    }

    dispatch({
      type: Types.LOAD_REPORTS_SUCCESS,
      payload: {
        uf: ufReport,
        city: cityReport,
        country: countryReport,
      },
    });
  } catch (error) {
    console.log('error:', error);
    dispatch({ type: Types.LOAD_REPORTS_FAILURE });
  }
};

export default loadReports;
