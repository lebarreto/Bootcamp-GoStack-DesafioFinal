import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import { Alert } from 'react-native';

export function* addProblem({ payload }) {
  try {
    const { description, data } = payload;

    const response = yield call(api.post, `delivery/${data.id}/problems`, {
      description,
    });

    console.tron.log('response', response.data);
  } catch (error) {
    Alert.alert('Falha de autenticação', 'Verifique os seus dados.');
  }
}

export default all([takeLatest('@problem/ADD_PROBLEM_REQUEST', addProblem)]);
