import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signInRequest: ['payload'],
  updateProfileRequest: ['payload'],
  signUpRequest: ['payload'],
  signInSuccess: ['data', 'token'],
  updateProfileSuccess: ['data'],
  signFailure: ['error'],
});

export const UserTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: null,
  token: null,
  loading: false,
  error: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_REQUEST]: state => state.merge({ loading: true }),
  [Types.SIGN_UP_REQUEST]: state => state.merge({ loading: true }),
  [Types.UPDATE_PROFILE_REQUEST]: state => state.merge({ loading: true }),
  [Types.UPDATE_PROFILE_SUCCESS]: (state, { data }) =>
    state.merge({ loading: false, error: null, data }),
  [Types.SIGN_IN_SUCCESS]: (state, { data, token }) =>
    state.merge({ data, token, loading: false, error: null }),
  [Types.SIGN_FAILURE]: (state, { error }) =>
    state.merge({ loading: false, error }),
});
