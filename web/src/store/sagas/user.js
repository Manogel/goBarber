import { call, put } from 'redux-saga/effects';

import UserActions from '../ducks/user';
import api from '~/services/api';
import history from '~/services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/sessions', { email, password });

    const { token, user } = response.data;

    if (!user.provider) {
      console.tron.error('Usuário não é prestador!');
      return;
    }

    yield put(UserActions.signInSuccess(user, token));
    history.push('/dashboard');
  } catch (err) {
    alert('Erro', 'Ocorreu um erro ao entrar, verifique seus dados!');
    yield put(UserActions.signFailure(err));
  }
}
