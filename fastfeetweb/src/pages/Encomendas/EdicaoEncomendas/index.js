import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import Select from 'react-select';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { Container, EditOrder, FormOrder } from './styles';
import HeaderPages from '../../../components/HeaderPages';
import history from '../../../services/history';
import IconButton from '../../../components/IconButton';
import ButtonBack from '../../../components/ButtonBack';
import api from '../../../services/api';
import * as OrdersActions from '../../../store/modules/orders/actions';

const schema = Yup.object().shape({
  product: Yup.string().required('O nome do produto é obrigatório'),
});

export default function EdicaoEncomendas({ match }) {
  const dispatch = useDispatch();

  const { id } = match.params;
  const [order, setOrders] = useState('');
  const [recipient, setRecipients] = useState([]);
  const [delivery, setDeliveries] = useState([]);
  const [product, setProducts] = useState([]);

  useEffect(() => {
    async function loadOrder() {
      if (id) {
        const response = await api.get(`orders/${id}`);

        const currentRecipient = {
          value: response.data.recipient.id,
          label: response.data.recipient.name,
        };

        const currentDelivery = {
          value: response.data.delivery.id,
          label: response.data.delivery.name,
        };

        response.data.currentRecipient = currentRecipient;
        response.data.currentDelivery = currentDelivery;

        setOrders(response.data);
      }
    }

    async function loadRecipients() {
      const response = await api.get('/recipient');

      const data = response.data.map(recipient => ({
        value: recipient.id,
        label: recipient.name,
      }));

      setRecipients(data);
    }

    async function loadDeliveries() {
      const response = await api.get('/deliveries');

      const dataDelivery = response.data.map(delivery => ({
        value: delivery.id,
        label: delivery.name,
      }));

      setDeliveries(dataDelivery);
    }

    loadOrder();
    loadRecipients();
    loadDeliveries();
  }, [id]);

  async function handleSubmit({ product }) {
    dispatch(OrdersActions.updateRequest({ id, product }));
  }

  const handleRecipientChange = e => {
    order.recipient_id = e.value;
    console.tron.log(order.recipient_id);

    setRecipients(order.recipient_id);
  };

  const handleDeliverymanChange = e => {
    order.delivaryman_id = e.value;
    console.tron.log(order.delivaryman_id);

    setDeliveries(order.delivaryman_id);
  };

  const handleProductChange = e => {
    order.product = e.target.value;
    console.tron.log('Product', e.target.value);
    setProducts(order.product);
  };

  return (
    <Container>
      <EditOrder>
        <Form initialData={order} schema={schema} onSubmit={handleSubmit}>
          <HeaderPages title="Edição de Encomendas">
            <ButtonBack
              Icon={MdKeyboardArrowLeft}
              title="VOLTAR"
              type="button"
              action={history.goBack}
            />
            <IconButton
              Icon={MdCheck}
              title="SALVAR"
              type="submit"
              onClick={handleSubmit}
            />
          </HeaderPages>
          <FormOrder>
            <div className="divSelect" id="recipient_id">
              <label>Destinatário</label>
              <Select
                className="rec"
                name="recipient_id"
                placeholder={
                  order ? order.recipient.name : 'Selecione um entregador... '
                }
                defaultValue={order.recipient_id}
                options={recipient}
                onChange={handleRecipientChange}
                isDisabled
              />
            </div>
            <div className="divSelect" id="delivaryman_id">
              <label>Entregadores</label>
              <Select
                className="del"
                name="delivaryman_id"
                placeholder={
                  order ? order.delivery.name : 'Selecione um entregador... '
                }
                defaultValue={order.delivaryman_id}
                options={delivery}
                onChange={handleDeliverymanChange}
                isDisabled
              />
            </div>
            <div className="divInp" id="product">
              <label>Nome do produto</label>
              <Input
                name="product"
                placeholder="Nome do produto"
                onChange={handleProductChange}
              />
            </div>
          </FormOrder>
        </Form>
      </EditOrder>
    </Container>
  );
}

EdicaoEncomendas.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
