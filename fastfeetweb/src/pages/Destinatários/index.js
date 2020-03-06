import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';

import { Container, RecipientContent, Table } from './styles';
import HeaderList from '../../components/HeaderList';
import SearchInput from '../../components/Search';
import IconButton from '../../components/IconButton';
import api from '../../services/api';
import DestinatariosTabela from './DestinatariosTabela';
import history from '../../services/history';

export default function Destinatários() {
  const [recipients, setRecipients] = useState([]);

  async function loadRecipients() {
    const response = await api.get('recipient');
    setRecipients(response.data);
  }

  async function handleSearch(e) {
    const response = await api.get('recipient', {
      params: {
        q: e.target.value,
      },
    });

    setRecipients(response.data);
  }

  useEffect(() => {
    loadRecipients();
  }, []);

  return (
    <Container>
      <RecipientContent>
        <HeaderList title="Gerenciando destinatários">
          <SearchInput
            type="text"
            placeholder="Buscar por destinatários"
            onChange={handleSearch}
          />
          <IconButton
            Icon={MdAdd}
            title="CADASTRAR"
            type="button"
            action={() => history.push('/destinatario')}
          />
        </HeaderList>
        <Table>
          <section>
            <strong>ID</strong>
            <strong>Nome</strong>
            <strong>Endereço</strong>
            <strong>Ações</strong>
          </section>
        </Table>
        {recipients.map(recipient => (
          <DestinatariosTabela
            key={recipient.id}
            data={recipient}
            updateDest={loadRecipients}
          />
        ))}
      </RecipientContent>
    </Container>
  );
}
