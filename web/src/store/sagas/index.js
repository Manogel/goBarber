import { all, takeLatest } from 'redux-saga/effects';
import { UserTypes } from '../ducks/user';
import { signIn, signUp, updateProfile, signOut } from './user';
import { setToken } from '~/services/api';

function setInitialToken({ payload }) {
  if (!payload) return;

  const { token } = payload.user;

  if (token) {
    setToken(token);
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest('persist/REHYDRATE', setInitialToken),
    takeLatest(UserTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(UserTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(UserTypes.UPDATE_PROFILE_REQUEST, updateProfile),
    takeLatest(UserTypes.SIGN_OUT, signOut),
  ]);
}
