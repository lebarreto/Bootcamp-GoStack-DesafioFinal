import React from 'react';
import {
  MdRemoveRedEye,
  MdEdit,
  MdDelete,
  MdFiberManualRecord,
} from 'react-icons/md';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import { useDispatch } from 'react-redux';

import {
  Container,
  Entregue,
  Retirada,
  Pendente,
  Cancelada,
  Button,
} from './styles';
import ButtonMore from '../../../components/ButtonMore';
import history from '../../../services/history';
import * as OrderActions from '../../../store/modules/orders/actions';

export default function EncomendasTabela({ data, updateOrder }) {
  const dispatch = useDispatch();

  function handleDelete() {
    var confirmDelete = window.confirm(
      `Você tem certeza que deseja deletar a encomenda ${data.id}?`
    );

    if (confirmDelete === true) {
      dispatch(OrderActions.deleteRequest(data.id));
      updateOrder();
    } else {
      history.push('/encomendas');
    }
  }
  return (
    <Container>
      <small>#{data.id}</small>
      <small>{data.product}</small>
      <small>{data.recipient.name}</small>
      <small>{data.delivery.name}</small>
      <small>{data.recipient.city}</small>
      <small>{data.recipient.state}</small>
      <small>
        {data.end_dateFormated ? (
          <Entregue>
            <MdFiberManualRecord size={15} color="#2CA42B" />
            <strong>ENTREGUE</strong>
          </Entregue>
        ) : data.canceled_dateFormated && data.start_dateFormated ? (
          <Cancelada>
            <MdFiberManualRecord size={15} color="#de3b3b" />
            <strong>CANCELADA</strong>
          </Cancelada>
        ) : data.start_dateFormated ? (
          <Retirada>
            <MdFiberManualRecord size={15} color="#4D85EE" />
            <strong>RETIRADA</strong>
          </Retirada>
        ) : (
          <Pendente>
            <MdFiberManualRecord size={15} color="#c1bc35" />
            <strong>PENDENTE</strong>
          </Pendente>
        )}
      </small>

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
                  <div className="header">Informações da encomenda</div>
                  <p className="street">
                    {data.recipient.street}, {data.recipient.number}
                  </p>
                  <p className="city">
                    {data.recipient.city} - {data.recipient.state}
                  </p>
                  <p className="zip">{data.recipient.zip}</p>
                  <div className="headerDate">Datas</div>
                  <p className="retirada">
                    Retirada: {data.start_dateFormated}
                  </p>
                  <p className="entrega">Entrega: {data.end_dateFormated}</p>
                  {data.signature ? (
                    <div className="signatureDiv">
                      <p>Assinatura do destinatário</p>
                      <img src={data.signature.url} alt="" />
                    </div>
                  ) : null}
                </div>
              )}
            </Popup>
          </div>
          <div>
            <button
              onClick={() => history.push(`/encomenda/${data.id}`)}
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

EncomendasTabela.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    product: PropTypes.string,
    recipient: PropTypes.shape({
      name: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
    }),
    status: PropTypes.string,
    signature: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
  updateOrder: PropTypes.func.isRequired,
};
