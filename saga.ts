import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import api from './services/api';
import { signInResponse, signInFailure } from './actions';
import { actionTypes, SignInRequest } from './interfaces';

export const loginUrl = 'b2b1f211-e43c-40c2-90a1-b1f2a37e6c91';

export function* signInRequest({ email, password }: SignInRequest) {
  try {
    const { status, data }: AxiosResponse<{ token: string }> = yield call(api.post, loginUrl, {
      email,
      password,
    });
    if (status === 200) {
      yield put(signInResponse(data.token));
    }
  } catch (err) {
    yield put(signInFailure());
  }
}

export function alertSignSuccess() {
  toast('Usuário logado com sucesso 🤘🏻', {
    position: 'top-center',
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}

function* rootSaga(): Generator {
  yield all([
    takeLatest(actionTypes.SIGN_IN_REQUEST, signInRequest),
    takeLatest(actionTypes.SIGN_IN_RESPONSE, alertSignSuccess),
  ]);
}

export default rootSaga;
