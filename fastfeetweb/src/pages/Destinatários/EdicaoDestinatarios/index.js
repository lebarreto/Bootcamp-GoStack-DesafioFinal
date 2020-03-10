import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { Container, EditRecipient, FormRecipient } from './styles';
import HeaderPages from '../../../components/HeaderPages';
import history from '../../../services/history';
import IconButton from '../../../components/IconButton';
import ButtonBack from '../../../components/ButtonBack';
import api from '../../../services/api';
import * as RecipientActions from '../../../store/modules/recipient/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome do destinatário é obrigatório'),
  street: Yup.string().required('O nome da rua é obrigatório'),
  number: Yup.string().required('O número é obrigatório'),
  city: Yup.string().required('O nome da cidade é obrigatório'),
  state: Yup.string().required('O estado é obrigatório'),
  zip: Yup.number().required('O zip é obrigatório'),
});

export default function EdicaoDestinatarios({ match }) {
  const dispatch = useDispatch();

  const { id } = match.params;
  const [recipients, setRecipients] = useState('');
  const [, setName] = useState([]);
  const [, setStreet] = useState([]);
  const [, setNumber] = useState([]);
  const [, setComplement] = useState([]);
  const [, setCity] = useState([]);
  const [, setState] = useState([]);
  const [, setZip] = useState([]);

  async function loadRecipients() {
    if (id) {
      const response = await api.get(`recipient/${id}`);
      setRecipients(response.data);
    }
  }

  useEffect(() => {
    loadRecipients(); // eslint-disable-next-line
  }, [id]);

  const handleNameChange = e => {
    recipients.name = e.target.value;
    setName(recipients.name);
  };

  const handleStreetChange = e => {
    recipients.street = e.target.value;
    setStreet(recipients.street);
  };

  const handleNumberChange = e => {
    recipients.number = e.target.value;
    setNumber(recipients.number);
  };

  const handleComplementChange = e => {
    recipients.complement = e.target.value;
    setComplement(recipients.complement);
  };

  const handleCityChange = e => {
    recipients.city = e.target.value;
    setCity(recipients.city);
  };

  const handleStateChange = e => {
    recipients.state = e.target.value;
    setState(recipients.state);
  };

  const handleZipChange = e => {
    recipients.zip = e.target.value;
    setZip(recipients.zip);
  };

  async function handleSubmit({
    name,
    street,
    number,
    complement,
    city,
    state,
    zip,
  }) {
    dispatch(
      RecipientActions.updateRequest({
        id,
        name,
        street,
        number,
        complement,
        city,
        state,
        zip,
      })
    );
  }

  return (
    <Container>
      <EditRecipient>
        <Form initialData={recipients} schema={schema} onSubmit={handleSubmit}>
          <HeaderPages title="Edição de Destinatários">
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

EdicaoDestinatarios.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
