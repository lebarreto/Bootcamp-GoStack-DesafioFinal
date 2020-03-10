import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import { deleteSuccess } from './actions';
import { Alert } from 'react-native';

export function* updateRecipient({
  id,
  name,
  street,
  number,
  complement,
  city,
  state,
  zip,
}) {
  try {
    yield call(api.put, `recipient/${id}`, {
      name,
      street,
      number,
      complement,
      state,
      city,
      zip,
    });

    Alert.alert('Sucesso', 'Destinatário atualizado com sucesso!');
  } catch (error) {
    Alert.alert(
      'Erro',
      'Falha na atualização de destinatário, verifique os campos novamente.'
    );
  }
}

export function* deleteRecipient({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `recipient/${id}`, { id });

    yield put(deleteSuccess({ id }));
    Alert.alert('Sucesso', 'Destinatário deletado com sucesso!');
  } catch (error) {
    Alert.alert('Erro', 'Falha ao deletar destinatário.');
  }
}

export function* addRecipient({ payload }) {
  try {
    const { name, street, number, complement, city, state, zip } = payload;

    yield call(api.post, `recipient`, {
      name,
      street,
      number,
      complement,
      city,
      state,
      zip,
    });

    Alert.alert('Sucesso', 'Destinatário criado com sucesso!');
  } catch (error) {
    Alert.alert(
      'Erro',
      'Falha na criação de destinatário, verifique os campos novamente.'
    );
  }
}

export default all([
  takeLatest('@recipient/UPDATE_REQUEST', updateRecipient),
  takeLatest('@recipient/DELETE_REQUEST', deleteRecipient),
  takeLatest('@recipient/ADD_REQUEST', addRecipient),
]);
