import Switch from 'helpers/functions/Switch';

import * as authTypes from './modules/auth/ActionsTypes';
import * as locationsTypes from './modules/locations/ActionsTypes';

import * as login from './modules/auth/reducer/login';
import * as verifyToken from './modules/auth/reducer/verifyToken';
import * as loadCities from './modules/locations/reducer/loadCities';
import * as loadUfs from './modules/locations/reducer/loadUfs';

function reducer(state = {}, action) {
  return Switch.on(action.type, state, action.payload)
    .case(authTypes.LOGOUT, login.logout)
    .case(authTypes.LOGIN_REQUEST, login.request)
    .case(authTypes.LOGIN_SUCCESS, login.success)
    .case(authTypes.LOGIN_FAILURE, login.failure)
    .case(authTypes.VERIFY_TOKEN_REQUEST, verifyToken.request)
    .case(authTypes.VERIFY_TOKEN_SUCCESS, verifyToken.success)
    .case(authTypes.VERIFY_TOKEN_FAILURE, verifyToken.failure)

    .case(locationsTypes.LOAD_CITIES_REQUEST, loadCities.request)
    .case(locationsTypes.LOAD_CITIES_SUCCESS, loadCities.success)
    .case(locationsTypes.LOAD_CITIES_FAILURE, loadCities.failure)
    .case(locationsTypes.LOAD_UFS_REQUEST, loadUfs.request)
    .case(locationsTypes.LOAD_UFS_SUCCESS, loadUfs.success)
    .case(locationsTypes.LOAD_UFS_FAILURE, loadUfs.failure)
    
    .default(state);
}

export default reducer;
