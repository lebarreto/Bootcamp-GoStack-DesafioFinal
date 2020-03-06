import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';
import { deleteSuccess, addSuccess } from './actions';

export function* deleteDeliveryman({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `deliveries/${id}`, { id });

    yield put(deleteSuccess({ id }));
    toast.success('Entregador deletado com sucesso!');

    history.push('/entregadores');
  } catch (error) {
    toast.error('Falha ao deletar entregador.');
  }
}

export function* addDeliveryman({ payload }) {
  try {
    const { name, email, avatar_id } = payload;

    const deliveryman = Object.assign({ name, email, avatar_id });

    const response = yield call(api.post, 'deliveries', deliveryman);

    yield put(addSuccess(response.data));
    toast.success('Entregador criado com sucesso!');

    history.push('/entregadores');
  } catch (error) {
    toast.error('Falha ao criar entregador, verifique os dados.');
  }
}

export function* updateDeliveryman({ id, name, email, avatar_id }) {
  try {
    yield call(api.put, `deliveries/${id}`, { name, email, avatar_id });

    toast.success('Entregador atualizado com sucesso!');

    history.push('/entregadores');
  } catch (error) {
    toast.error('Falha ao atualizar entregador, verifique os dados.');
  }
}

export default all([
  takeLatest('@deliveryman/DELETE_REQUEST', deleteDeliveryman),
  takeLatest('@deliveryman/ADD_REQUEST', addDeliveryman),
  takeLatest('@deliveryman/UPDATE_REQUEST', updateDeliveryman),
]);
