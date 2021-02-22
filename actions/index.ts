import { actionTypes } from '../interfaces';
import * as actionIs from '../interfaces/actions.interfaces';

export function signInRequest(email: string, password: string): actionIs.SignInRequest {
  return {
    type: actionTypes.SIGN_IN_REQUEST,
    email,
    password,
  };
}

export function signInResponse(token: string): actionIs.SignInResponse {
  return {
    type: actionTypes.SIGN_IN_RESPONSE,
    token,
  };
}

export function signInFailure(): actionIs.SignInFailure {
  return {
    type: actionTypes.SIGN_IN_FAILURE,
  };
}
