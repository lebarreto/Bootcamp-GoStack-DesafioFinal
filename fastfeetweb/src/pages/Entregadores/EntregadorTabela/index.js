import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Container, Button } from './styles';
import ButtonMore from '../../../components/ButtonMore';
import history from '../../../services/history';
import * as DeliverymanActions from '../../../store/modules/deliveryman/actions';

export default function EntregadorTabela({ data, updateDeliveryman }) {
  const dispatch = useDispatch();

  function handleDelete() {
    var confirmDelete = window.confirm(
      `Você tem certeza que deseja deletar o entregador ${data.name}?`
    );

    if (confirmDelete === true) {
      dispatch(DeliverymanActions.deleteRequest(data.id));
      updateDeliveryman();
    } else {
      history.push('/entregadores');
    }
  }

  return (
    <Container>
      <small>#{data.id}</small>
      <small>
        <img
          src={data.avatar_id ? data.avatar.url : null}
          alt={data.avatar_id ? data.avatar.name : null}
        />
      </small>
      <small>{data.name}</small>
      <small>{data.email}</small>

      <ButtonMore>
        <Button>
          <div>
            <button
              onClick={() => history.push(`/entregador/${data.id}`)}
              type="button"
            >
              <MdEdit color="#4D85EE" size={10} />
              <span>Editar</span>
            </button>
          </div>
          <div>
            <button onClick={handleDelete} type="button">
              <MdDelete color="#DE3B3B" size={10} />
              <span>Excluir</span>
            </button>
          </div>
        </Button>
      </ButtonMore>
    </Container>
  );
}

EntregadorTabela.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    avatar_id: PropTypes.number,
    avatar: PropTypes.shape({
      url: PropTypes.string,
      name: PropTypes.string,
      path: PropTypes.string,
    }),
  }).isRequired,
  updateDeliveryman: PropTypes.func.isRequired,
};
