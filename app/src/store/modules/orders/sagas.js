import { all, takeLatest, call, put } from 'redux-saga/effects';

import { deleteSuccess, cancelSuccess } from './actions';
import api from '../../../services/api';
import { Alert } from 'react-native';

export function* update({ id, product }) {
  try {
    console.tron.log(id);

    yield call(api.put, `orders/${id}`, {
      id,
      product,
    });

    Alert.alert('Sucesso', 'Encomenda atualizada com sucesso!');
  } catch (error) {
    Alert.alert(
      'Erro',
      'Falha na atualização da encomenda, verifique os campos novamente.'
    );
  }
}

export function* addOrder({ payload }) {
  try {
    const { product, recipient_id, delivaryman_id } = payload;

    yield call(api.post, `orders`, {
      product,
      recipient_id,
      delivaryman_id,
    });

    Alert.alert('Sucesso', 'Encomenda criada com sucesso!');
  } catch (error) {
    Alert.alert(
      'Erro',
      'Falha na atualização da encomenda, verifique os campos novamente.'
    );
  }
}

export function* deleteOrder({ payload }) {
  try {
    const { id } = payload;
    console.tron.log('id', id);

    yield call(api.delete, `orders/${id}`, { id });

    yield put(deleteSuccess({ id }));
    Alert.alert('Sucesso', 'Encomenda deletada com sucesso!');
  } catch (error) {
    Alert.alert('Erro', 'Falha ao deletar encomenda.');
  }
}

export function* cancelOrder({ payload }) {
  try {
    const { id, delivery_id, description, delivery } = payload.order;

    const canceled_at = new Date();
    payload.order.delivery.canceled_at = canceled_at;

    yield call(api.put, `orders/${delivery_id}`, { canceled_at });

    yield put(cancelSuccess({ id, delivery_id, description, delivery }));
    Alert.alert('Sucesso', 'Encomenda cancelada com sucesso!');
  } catch (error) {
    Alert.alert('Erro', 'Falha ao cancelar encomenda.');
  }
}

export default all([
  takeLatest('@order/UPDATE_REQUEST', update),
  takeLatest('@order/ADD_REQUEST', addOrder),
  takeLatest('@order/DELETE_REQUEST', deleteOrder),
  takeLatest('@order/CANCEL_REQUEST', cancelOrder),
]);
