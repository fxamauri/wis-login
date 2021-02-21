import { HYDRATE } from 'next-redux-wrapper';
import { AppState, Action } from './interfaces';

export const initialState: AppState = {
  onekey: 'false',
};

const reducer = (
  state = initialState,
  action: Action | { type: typeof HYDRATE; payload: AppState },
): AppState => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default reducer;
