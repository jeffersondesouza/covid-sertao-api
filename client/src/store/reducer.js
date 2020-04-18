import Switch from 'helpers/functions/Switch';

import * as authTypes from './modules/auth/ActionsTypes';
import * as locationsTypes from './modules/locations/ActionsTypes';
import * as userTypes from './modules/user/ActionsTypes';

import * as login from './modules/auth/reducer/login';
import * as verifyToken from './modules/auth/reducer/verifyToken';
import * as loadCities from './modules/locations/reducer/loadCities';
import * as loadUfs from './modules/locations/reducer/loadUfs';
import * as saveUser from './modules/user/reducer/saveUser';
import * as loadUsers from './modules/user/reducer/loadUsers';


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

    .case(userTypes.CLEAN_UP, saveUser.cleanUp)
    .case(userTypes.SAVE_USER_REQUEST, saveUser.request)
    .case(userTypes.SAVE_USER_SUCCESS, saveUser.success)
    .case(userTypes.SAVE_USER_FAILURE, saveUser.failure)

    .case(userTypes.LOAD_USERS_REQUEST, loadUsers.request)
    .case(userTypes.LOAD_USERS_SUCCESS, loadUsers.success)
    .case(userTypes.LOAD_USERS_FAILURE, loadUsers.failure)

    .default(state);
}

export default reducer;
