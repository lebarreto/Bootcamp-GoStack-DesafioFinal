import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import { deleteSuccess, addSuccess } from './actions';
import { Alert } from 'react-native';

export function* deleteDeliveryman({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `deliveries/${id}`, { id });

    yield put(deleteSuccess({ id }));
    Alert.alert('Sucesso', 'Entregador deletado com sucesso!');
  } catch (error) {
    Alert.alert('Erro', 'Falha ao deletar entregador.');
  }
}

export function* addDeliveryman({ payload }) {
  try {
    const { name, email, avatar_id } = payload;

    const deliveryman = Object.assign({ name, email, avatar_id });

    const response = yield call(api.post, 'deliveries', deliveryman);

    yield put(addSuccess(response.data));
    Alert.alert('Sucesso', 'Entregador criado com sucesso!');
  } catch (error) {
    Alert.alert('Erro', 'Falha ao criar entregador, verifique os dados.');
  }
}

export function* updateDeliveryman({ id, name, email, avatar_id }) {
  try {
    yield call(api.put, `deliveries/${id}`, { name, email, avatar_id });

    Alert.alert('Sucesso', 'Entregador atualizado com sucesso!');
  } catch (error) {
    Alert.alert('Erro', 'Falha ao atualizar entregador, verifique os dados.');
  }
}

export default all([
  takeLatest('@deliveryman/DELETE_REQUEST', deleteDeliveryman),
  takeLatest('@deliveryman/ADD_REQUEST', addDeliveryman),
  takeLatest('@deliveryman/UPDATE_REQUEST', updateDeliveryman),
]);
