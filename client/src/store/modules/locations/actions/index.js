import * as Types from '../ActionsTypes';

import { request } from 'helpers/http';
import { loadCitiesQuery, loadUfsQuery } from 'repository/location';

import selectToken from 'store/selectors/selectToken';

const loadUfs = (dispatch, state) => async () => {
  dispatch({ type: Types.LOAD_UFS_REQUEST });

  try {
    const token = selectToken(state);
    
    const { data } = await request(loadUfsQuery({ token }));
    dispatch({ type: Types.LOAD_UFS_SUCCESS, payload: data });

  } catch (error) {
    console.log('error:', error);
    dispatch({ type: Types.LOAD_UFS_FAILURE });
  }
};

const loadCities = dispatch => async () => {
  dispatch({ type: Types.LOAD_CITIES_REQUEST });

  try {
    const { data } = await request(loadCitiesQuery());

    dispatch({ type: Types.LOAD_CITIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: Types.LOAD_CITIES_FAILURE });
  }
};

export default (dispatch, state) => ({
  loadUfs: loadUfs(dispatch, state),
  loadCities: loadCities(dispatch, state),
});
