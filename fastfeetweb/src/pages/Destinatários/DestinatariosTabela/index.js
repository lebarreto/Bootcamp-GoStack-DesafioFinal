import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Container, Button } from './styles';
import ButtonMore from '../../../components/ButtonMore';
import history from '../../../services/history';
import * as RecipientActions from '../../../store/modules/recipient/actions';

export default function DestinatariosTabela({ data, updateDest }) {
  const dispatch = useDispatch();

  function handleDelete() {
    var confirmDelete = window.confirm(
      `Você tem certeza que deseja deletar o destinatário ${data.name}?`
    );

    if (confirmDelete === true) {
      dispatch(RecipientActions.deleteRequest(data.id));
      updateDest();
    } else {
      history.push('/destinatarios');
    }
  }

  return (
    <Container>
      <small>#{data.id}</small>
      <small>{data.name}</small>
      <small>
        {data.street}, {data.number}, {data.city} - {data.state}
      </small>

      <ButtonMore>
        <Button>
          <div>
            <button
              onClick={() => history.push(`/destinatario/${data.id}`)}
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

DestinatariosTabela.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    street: PropTypes.string,
    number: PropTypes.number,
    state: PropTypes.string,
    city: PropTypes.string,
    zip: PropTypes.number,
  }).isRequired,
  updateDest: PropTypes.func.isRequired,
};
