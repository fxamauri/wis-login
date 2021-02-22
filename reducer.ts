import { HYDRATE } from 'next-redux-wrapper';
import { AppState, Action, actionTypes } from './interfaces';

export const initialState: AppState = {
  token: '',
  loading: false,
};

const reducer = (
  state = initialState,
  action: Action | { type: typeof HYDRATE; payload: AppState },
): AppState => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case actionTypes.SIGN_IN_REQUEST:
      return {
        ...state,
        ...{ loading: true },
      };

    case actionTypes.SIGN_IN_RESPONSE:
      return {
        ...state,
        ...{ token: action.token, loading: false },
      };

    case actionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        ...{ loading: false },
      };

    default:
      return state;
  }
};

export default reducer;
