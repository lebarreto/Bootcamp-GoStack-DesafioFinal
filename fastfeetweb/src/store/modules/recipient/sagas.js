import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';
import { deleteSuccess } from './actions';

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

    toast.success('Destinatário atualizado com sucesso!');

    history.push('/destinatarios');
  } catch (error) {
    toast.error(
      'Falha na atualização de destinatário, verifique os campos novamente.'
    );
  }
}

export function* deleteRecipient({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `recipient/${id}`, { id });

    yield put(deleteSuccess({ id }));
    toast.success('Destinatário deletado com sucesso!');

    history.push('/destinatarios');
  } catch (error) {
    toast.error('Falha ao deletar destinatário.');
  }
}

export function* addRecipient({ payload }) {
  try {
    const {
      name,
      street,
      number,
      complement,
      city,
      state,
      zip,
      email,
    } = payload;

    yield call(api.post, `recipient`, {
      name,
      street,
      number,
      complement,
      city,
      state,
      zip,
      email,
    });

    toast.success('Destinatário criado com sucesso!');

    history.push('/destinatarios');
  } catch (error) {
    toast.error(
      'Falha na criação de destinatário, verifique os campos novamente.'
    );
  }
}

export default all([
  takeLatest('@recipient/UPDATE_REQUEST', updateRecipient),
  takeLatest('@recipient/DELETE_REQUEST', deleteRecipient),
  takeLatest('@recipient/ADD_REQUEST', addRecipient),
]);
