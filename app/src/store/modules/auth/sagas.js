import { all, takeLatest, call, put } from 'redux-saga/effects';

import { signInSuccess, signFailure } from './actions';
import api from '../../../services/api';
import { Alert } from 'react-native';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `recipient/${id}`);

    yield put(signInSuccess(response.data));
  } catch (error) {
    Alert.alert('Falha de autenticação', 'Verifique os seus dados.');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;
  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }
}

export function signOut() {}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
