import React, { useEffect, useState } from 'react';
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
  recipient_id: Yup.string().required('O nome do destinatário é obrigatório'),
  delivaryman_id: Yup.string().required('O nome do entregador é obrigatório'),
});

export default function CriacaoEncomendas() {
  const dispatch = useDispatch();

  const [recipient, setRecipients] = useState([]);
  const [delivery, setDeliveries] = useState([]);
  const [product, setProducts] = useState([]);
  const [recipient_id, setRecipientId] = useState([]);
  const [delivaryman_id, setDelivarymanId] = useState([]);

  useEffect(() => {
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

    loadRecipients();
    loadDeliveries();
  }, []);

  async function handleSubmit({ product, delivaryman_id, recipient_id }) {
    console.tron.log(delivaryman_id);
    dispatch(OrdersActions.addRequest(product, delivaryman_id, recipient_id));
  }

  const handleRecipientChange = e => {
    setRecipientId(e.value);
  };

  const handleDeliverymanChange = e => {
    console.tron.log(e.value);
    setDelivarymanId(e.value);
  };

  const handleProductChange = e => {
    setProducts(e.target.value);
  };

  return (
    <Container>
      <EditOrder>
        <Form schema={schema} onSubmit={handleSubmit}>
          <HeaderPages title="Criação de Encomendas">
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
              action={() =>
                handleSubmit({ product, delivaryman_id, recipient_id })
              }
            />
          </HeaderPages>
          <FormOrder>
            <div className="divSelect" id="recipient_id">
              <label>Destinatário</label>
              <Select
                className="rec"
                name="recipient_id"
                placeholder={'Selecione um entregador... '}
                options={recipient}
                onChange={handleRecipientChange}
              />
            </div>
            <div className="divSelect" id="delivaryman_id">
              <label>Entregadores</label>
              <Select
                className="del"
                name="delivaryman_id"
                placeholder={'Selecione um entregador... '}
                options={delivery}
                onChange={handleDeliverymanChange}
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
