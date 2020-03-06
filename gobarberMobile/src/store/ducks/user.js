import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  handleLoginRequest: [],
  handleRegisterRequest: [],
  handleLoginSuccess: ['data'],
  userRequestFailure: ['error'],
});

export const UserTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: null,
  loading: false,
  error: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.HANDLE_LOGIN_REQUEST]: state => state.merge({ loading: true }),
  [Types.HANDLE_REGISTER_REQUEST]: state => state.merge({ loading: true }),
  [Types.HANDLE_LOGIN_SUCCESS]: (state, { data }) =>
    state.merge({ data, error: null, loading: false }),
  [Types.USER_REQUEST_FAILURE]: (state, { error }) =>
    state.merge({ error, loading: false }),
});
