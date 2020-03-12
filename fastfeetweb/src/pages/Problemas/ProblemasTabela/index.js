import React from 'react';
import { MdRemoveRedEye, MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Popup from 'reactjs-popup';

import { Container, Button } from './styles';
import ButtonMore from '../../../components/ButtonMore';
import history from '../../../services/history';
import * as ProblemsActions from '../../../store/modules/orders/actions';
import api from '../../../services/api';

export default function ProblemasTabela({ data, updateProblem }) {
  const dispatch = useDispatch();

  async function handleCancel() {
    var confirmCancel = window.confirm(
      `Você tem certeza que deseja cancelar a encomenda ${data.delivery_id}?`
    );

    if (confirmCancel === true) {
      console.tron.log(data);
      await dispatch(ProblemsActions.cancelRequest(data));
      await api.delete(`problem/${data.id}/delete`);
      updateProblem();
    } else {
      history.push('/destinatarios');
    }
  }

  return (
    <Container>
      <small>#{data.delivery_id}</small>
      <small>{data.description}</small>

      <ButtonMore>
        <Button>
          <div>
            <Popup
              trigger={
                <button className="button">
                  {' '}
                  <MdRemoveRedEye color="#8E5BE8" size={10} />
                  <span>Visualizar</span>{' '}
                </button>
              }
              modal
            >
              {close => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="header">VISUALIZAR PROBLEMA</div>
                  <div className="content">{data.description}</div>
                </div>
              )}
            </Popup>
          </div>
          <div>
            <button onClick={handleCancel} type="button">
              <MdDelete color="#DE3B3B" size={10} />
              <span>Cancelar</span>
            </button>
          </div>
        </Button>
      </ButtonMore>
    </Container>
  );
}

ProblemasTabela.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    delivery_id: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
  updateProblem: PropTypes.func.isRequired,
};
