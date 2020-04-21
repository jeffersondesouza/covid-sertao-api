import * as Types from '../ActionsTypes';

const cleanUp = dispatch => () => {
  dispatch({ type: Types.CLEAN_UP });
};

export default cleanUp;
