import Switch from 'helpers/functions/Switch';

import * as authTypes from './modules/auth/ActionsTypes';
import * as locationsTypes from './modules/locations/ActionsTypes';
import * as userTypes from './modules/user/ActionsTypes';
import * as casesTypes from './modules/case/ActionsTypes';

import * as login from './modules/auth/reducer/login';
import * as verifyToken from './modules/auth/reducer/verifyToken';
import * as loadCities from './modules/locations/reducer/loadCities';
import * as loadUfs from './modules/locations/reducer/loadUfs';
import * as saveUser from './modules/user/reducer/saveUser';
import * as loadUsersCrew from './modules/user/reducer/loadUsersCrew';
import * as deleteCrewUser from './modules/user/reducer/deleteCrewUser';
import * as saveCase from './modules/case/reducer/saveCase';
import * as loadCases from './modules/case/reducer/loadCases';
import * as updateCase from './modules/case/reducer/updateCase';



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

    .case(userTypes.LOAD_USERS_REQUEST, loadUsersCrew.request)
    .case(userTypes.LOAD_USERS_SUCCESS, loadUsersCrew.success)
    .case(userTypes.LOAD_USERS_FAILURE, loadUsersCrew.failure)

    .case(userTypes.DELETE_CREW_USER_REQUEST, deleteCrewUser.request)
    .case(userTypes.DELETE_CREW_USER_SUCCESS, deleteCrewUser.success)
    .case(userTypes.DELETE_CREW_USER_FAILURE, deleteCrewUser.failure)

    .case(casesTypes.SAVE_CASE_REQUEST, saveCase.request)
    .case(casesTypes.SAVE_CASE_SUCCESS, saveCase.success)
    .case(casesTypes.SAVE_CASE_FAILURE, saveCase.failure)

    .case(casesTypes.LOAD_CASES_REQUEST, loadCases.request)
    .case(casesTypes.LOAD_CASES_SUCCESS, loadCases.success)
    .case(casesTypes.LOAD_CASES_FAILURE, loadCases.failure)

    .case(casesTypes.UPDATE_REQUEST, updateCase.request)
    .case(casesTypes.UPDATE_SUCCESS, updateCase.success)
    .case(casesTypes.UPDATE_FAILURE, updateCase.failure)

    .default(state);
}

export default reducer;
