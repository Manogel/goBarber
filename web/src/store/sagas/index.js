import { all, takeLatest } from 'redux-saga/effects';
import { UserTypes } from '../ducks/user';
import { signIn } from './user';

export default function* rootSaga() {
  yield all([takeLatest(UserTypes.SIGN_IN_REQUEST, signIn)]);
}
