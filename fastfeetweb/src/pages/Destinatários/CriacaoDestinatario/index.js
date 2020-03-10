import React, { useState } from 'react';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { Container, EditRecipient, FormRecipient } from './styles';
import HeaderPages from '../../../components/HeaderPages';
import history from '../../../services/history';
import IconButton from '../../../components/IconButton';
import ButtonBack from '../../../components/ButtonBack';
import * as RecipientActions from '../../../store/modules/recipient/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome do destinatário é obrigatório'),
  street: Yup.string().required('O nome da rua é obrigatório'),
  number: Yup.string().required('O número é obrigatório'),
  city: Yup.string().required('O nome da cidade é obrigatório'),
  state: Yup.string().required('O estado é obrigatório'),
  zip: Yup.string().required('O zip é obrigatório'),
  email: Yup.string().required('O email é obrigatório'),
});

export default function CriacaoDestinatario() {
  const dispatch = useDispatch();

  const [, setName] = useState([]);
  const [, setStreet] = useState([]);
  const [, setNumber] = useState([]);
  const [, setComplement] = useState([]);
  const [, setCity] = useState([]);
  const [, setState] = useState([]);
  const [, setZip] = useState([]);
  const [, setEmail] = useState([]);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleStreetChange = e => {
    setStreet(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleComplementChange = e => {
    setComplement(e.target.value);
  };

  const handleCityChange = e => {
    setCity(e.target.value);
  };

  const handleStateChange = e => {
    setState(e.target.value);
  };

  const handleZipChange = e => {
    setZip(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  async function handleSubmit({
    name,
    street,
    number,
    complement,
    city,
    state,
    zip,
    email,
  }) {
    dispatch(
      RecipientActions.addRequest(
        name,
        street,
        number,
        complement,
        city,
        state,
        zip,
        email
      )
    );
  }

  return (
    <Container>
      <EditRecipient>
        <Form schema={schema} onSubmit={handleSubmit}>
          <HeaderPages title="Criação de Destinatários">
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
          <FormRecipient>
            <div className="divName" id="name">
              <p>Nome</p>
              <Input
                name="name"
                placeholder="Nome do destinatário"
                onChange={handleNameChange}
              />
            </div>
            <div className="divEmail" id="email">
              <p>E-mail</p>
              <Input
                name="email"
                placeholder="E-mail do destinatário"
                onChange={handleEmailChange}
              />
            </div>
            <div className="divStreet" id="street">
              <p>Rua</p>
              <Input
                name="street"
                placeholder="Nome da rua"
                onChange={handleStreetChange}
              />
            </div>
            <div className="divNumber" id="number">
              <p>Número</p>
              <Input
                name="number"
                placeholder="Número"
                type="number"
                onChange={handleNumberChange}
              />
            </div>
            <div className="divComplement" id="complement">
              <p>Complemento</p>
              <Input
                name="complement"
                placeholder="Complemento"
                onChange={handleComplementChange}
              />
            </div>
            <div className="divCity" id="city">
              <p>Cidade</p>
              <Input
                name="city"
                placeholder="Cidade"
                onChange={handleCityChange}
              />
            </div>
            <div className="divState" id="state">
              <p>Estado</p>
              <Input
                name="state"
                placeholder="Estado"
                onChange={handleStateChange}
              />
            </div>
            <div className="divZip" id="zip">
              <p>CEP</p>
              <Input
                name="zip"
                placeholder="CEP"
                type="number"
                onChange={handleZipChange}
              />
            </div>
          </FormRecipient>
        </Form>
      </EditRecipient>
    </Container>
  );
}
