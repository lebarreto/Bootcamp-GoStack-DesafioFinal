import React, { useState } from 'react';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { Container, AddDeliveryman, FormDeliveryman } from './styles';
import HeaderPages from '../../../components/HeaderPages';
import history from '../../../services/history';
import IconButton from '../../../components/IconButton';
import ButtonBack from '../../../components/ButtonBack';
import * as DeliverymanActions from '../../../store/modules/deliveryman/actions';
import AvatarInput from '../AvatarInput';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome do entregador é obrigatório'),
  email: Yup.string().required('O email é obrigatório'),
});

export default function CriacaoEntregador() {
  const dispatch = useDispatch();

  const [, setName] = useState([]);
  const [, setEmail] = useState([]);

  function handleSubmit({ name, email, avatar_id }) {
    dispatch(DeliverymanActions.addRequest(name, email, avatar_id));
  }

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  return (
    <Container>
      <AddDeliveryman>
        <Form onSubmit={handleSubmit} schema={schema}>
          <HeaderPages title="Criação de entregadores">
            <IconButton
              Icon={MdKeyboardArrowLeft}
              title="VOLTAR"
              type="button"
              onClick={history.goBack}
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
                placeholder="Email do entregador"
                onChange={handleEmailChange}
              />
            </div>
          </FormDeliveryman>
        </Form>
      </AddDeliveryman>
    </Container>
  );
}
