import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import UserActions from '../ducks/user';
import api, { setToken } from '~/services/api';
import history from '~/services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/sessions', { email, password });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('Usuário não é prestador!');
      yield put(UserActions.signFailure('User is not provider!'));
      return;
    }
    setToken(token);
    yield put(UserActions.signInSuccess(user, token));
    history.push('/dashboard');
  } catch (err) {
    toast.error('Ocorreu um erro ao entrar, verifique seus dados!');
    yield put(UserActions.signFailure(err));
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, '/users', {
      name,
      email,
      password,
      provider: true,
    });
    yield put(UserActions.signFailure(null));
    history.push('/');
  } catch (err) {
    toast.error('Ocorreu um erro ao cadastrar, verifique seus dados!');
    yield put(UserActions.signFailure(err));
  }
}
