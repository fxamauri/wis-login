export enum actionTypes {
  SIGN_IN_REQUEST = 'SIGN_IN_REQUEST',
  SIGN_IN_RESPONSE = 'SIGN_IN_RESPONSE',
  SIGN_IN_FAILURE = 'SIGN_IN_FAILURE',
}

export type Action = SignInRequest | SignInResponse | SignInFailure;

export interface SignInRequest {
  type: actionTypes.SIGN_IN_REQUEST;
  email: string;
  password: string;
}

export interface SignInResponse {
  type: actionTypes.SIGN_IN_RESPONSE;
  token: string;
}

export interface SignInFailure {
  type: actionTypes.SIGN_IN_FAILURE;
}
