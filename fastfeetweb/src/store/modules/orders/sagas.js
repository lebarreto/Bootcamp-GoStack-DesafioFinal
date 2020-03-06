import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { deleteSuccess, cancelSuccess } from './actions';
import api from '../../../services/api';
import history from '../../../services/history';

export function* update({ id, product }) {
  try {
    console.tron.log(id);

    yield call(api.put, `orders/${id}`, {
      id,
      product,
    });

    toast.success('Encomenda atualizada com sucesso!');

    history.push('/encomendas');
  } catch (error) {
    toast.error(
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

    toast.success('Encomenda criada com sucesso!');

    history.push('/encomendas');
  } catch (error) {
    toast.error(
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
    toast.success('Encomenda deletada com sucesso!');

    history.push('/encomendas');
  } catch (error) {
    toast.error('Falha ao deletar encomenda.');
  }
}

export function* cancelOrder({ payload }) {
  try {
    const { id, delivery_id, description, delivery } = payload.order;

    const canceled_at = new Date();
    payload.order.delivery.canceled_at = canceled_at;

    yield call(api.put, `orders/${delivery_id}`, { canceled_at });

    yield put(cancelSuccess({ id, delivery_id, description, delivery }));
    toast.success('Encomenda cancelada com sucesso!');

    history.push('/problemas');
  } catch (error) {
    toast.error('Falha ao cancelar encomenda.');
  }
}

export default all([
  takeLatest('@order/UPDATE_REQUEST', update),
  takeLatest('@order/ADD_REQUEST', addOrder),
  takeLatest('@order/DELETE_REQUEST', deleteOrder),
  takeLatest('@order/CANCEL_REQUEST', cancelOrder),
]);
