import { all, takeLatest } from 'redux-saga/effects';
import { UserTypes } from '../ducks/user';
import { signIn, signUp } from './user';

export default function* rootSaga() {
  yield all([
    takeLatest(UserTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(UserTypes.SIGN_UP_REQUEST, signUp),
  ]);
}
