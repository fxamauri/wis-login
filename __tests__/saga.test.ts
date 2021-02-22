import { runSaga, Saga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import { signInRequest, loginUrl } from '../saga';
import * as actions from '../actions';
import api from '../services/api';

const apiMock = new MockAdapter(api);

describe('Saga', () => {
  it('should be able login', async () => {
    const dispatch = jest.fn();

    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

    apiMock.onPost(loginUrl).reply(200, { token });

    const email = '';
    const password = '';
    await runSaga({ dispatch }, signInRequest as Saga, { email, password }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(actions.signInResponse(token));
  });
});
