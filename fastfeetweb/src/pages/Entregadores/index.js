import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';

import { Container, DeliverymanContent, Table } from './styles';
import HeaderList from '../../components/HeaderList';
import SearchInput from '../../components/Search';
import IconButton from '../../components/IconButton';
import api from '../../services/api';
import history from '../../services/history';
import EntregadorTabela from './EntregadorTabela';

export default function Entregadores() {
  const [deliveryman, setDeliveryman] = useState([]);

  async function loadDeliveryman() {
    const response = await api.get('deliveries');
    setDeliveryman(response.data);
  }

  async function handleSearch(e) {
    const response = await api.get('deliveries', {
      params: {
        q: e.target.value,
      },
    });

    setDeliveryman(response.data);
  }

  useEffect(() => {
    loadDeliveryman();
  }, []);

  return (
    <Container>
      <DeliverymanContent>
        <HeaderList title="Gerenciando entregadores">
          <SearchInput
            type="text"
            placeholder="Buscar por entregadores"
            onChange={handleSearch}
          />
          <IconButton
            Icon={MdAdd}
            title="CADASTRAR"
            type="button"
            action={() => history.push('/entregador')}
          />
        </HeaderList>
        <Table>
          <section>
            <strong>ID</strong>
            <strong>Foto</strong>
            <strong>Nome</strong>
            <strong>Email</strong>
            <strong>Ações</strong>
          </section>
        </Table>
        {deliveryman.map(dm => (
          <EntregadorTabela
            key={dm.id}
            data={dm}
            updateDeliveryman={loadDeliveryman}
          />
        ))}
      </DeliverymanContent>
    </Container>
  );
}
