import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { Container, EditDeliveryman, FormDeliveryman } from './styles';
import HeaderPages from '../../../components/HeaderPages';
import history from '../../../services/history';
import IconButton from '../../../components/IconButton';
import ButtonBack from '../../../components/ButtonBack';
import api from '../../../services/api';
import * as DeliverymanActions from '../../../store/modules/deliveryman/actions';
import AvatarInput from '../AvatarInput';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome do destinatário é obrigatório'),
  email: Yup.string().required('O email é obrigatório'),
});

export default function EdicaoEntregador({ match }) {
  const dispatch = useDispatch();

  const { id } = match.params;
  const [delivery, setDelivery] = useState('');
  const [, setName] = useState([]);
  const [, setEmail] = useState([]);

  async function loadDeliveryman() {
    if (id) {
      const response = await api.get(`deliveries/${id}`);
      setDelivery(response.data);
    }
  }

  useEffect(() => {
    loadDeliveryman(); // eslint-disable-next-line
  }, [id]);

  const handleNameChange = e => {
    delivery.name = e.target.value;
    setName(delivery.name);
  };

  const handleEmailChange = e => {
    delivery.email = e.target.value;
    setEmail(delivery.street);
  };

  async function handleSubmit({ name, email, avatar_id }) {
    console.tron.log(name);
    dispatch(DeliverymanActions.updateRequest({ id, name, email, avatar_id }));
  }

  return (
    <Container>
      <EditDeliveryman>
        <Form initialData={delivery} schema={schema} onSubmit={handleSubmit}>
          <HeaderPages title="Edição de entregadores">
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
          <FormDeliveryman>
            <AvatarInput name="avatar_id" />
            <div className="divName" id="name">
              <p>Nome</p>
              <Input
                name="name"
                placeholder="Nome do entregador"
                onChange={handleNameChange}
              />
            </div>
            <div className="divEmail" id="email">
              <p>Email</p>
              <Input
                name="email"
                placeholder="Email"
                type="email"
                onChange={handleEmailChange}
              />
            </div>
          </FormDeliveryman>
        </Form>
      </EditDeliveryman>
    </Container>
  );
}

EdicaoEntregador.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
