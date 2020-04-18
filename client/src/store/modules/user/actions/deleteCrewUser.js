import * as Types from '../ActionsTypes';

import { request } from 'helpers/http';
import { deleteCrewUserQuery } from 'repository/user';

import selectToken from 'store/selectors/selectToken';

const deleteCrewUser = (dispatch, state) => async userId => {
  dispatch({ type: Types.DELETE_CREW_USER_REQUEST });

  try {
    const token = selectToken(state);

    const { data } = await request(deleteCrewUserQuery({ token, userId }));
    dispatch({ type: Types.DELETE_CREW_USER_SUCCESS, payload: data });
  } catch (error) {
    console.log('error:', error);
    dispatch({ type: Types.DELETE_CREW_USER_FAILURE });
  }
};

export default deleteCrewUser;
