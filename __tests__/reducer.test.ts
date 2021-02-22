import reducer, { initialState } from '../reducer';
import * as actions from '../actions';

describe('Reducer', () => {
  it('SIGN_IN_REQUEST', () => {
    const state = reducer(
      initialState,
      actions.signInRequest('anemail@email.com', 'astrongpassword'),
    );

    expect(state).toStrictEqual({ token: '', loading: true });
  });

  it('SIGN_IN_RESPONSE', () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

    const state = reducer(initialState, actions.signInResponse(token));

    expect(state).toStrictEqual({ token, loading: false });
  });

  it('SIGN_IN_FAILURE', () => {
    const state = reducer(initialState, actions.signInFailure());

    expect(state).toStrictEqual({ token: '', loading: false });
  });
});
