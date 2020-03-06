import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import { parseISO, format } from 'date-fns';

import { Container, OrderContent, Table } from './styles';
import SearchInput from '../../components/Search';
import HeaderList from '../../components/HeaderList';
import api from '../../services/api';
import history from '../../services/history';
import EncomendasTabela from './EncomendasTabela';
import IconButton from '../../components/IconButton';

export default function Encomendas() {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);

  function formatDate(data) {
    return data.map(order => ({
      ...order,
      start_dateFormated: order.start_date
        ? format(parseISO(order.start_date), 'dd/MM/yyyy')
        : null,
      end_dateFormated: order.end_date
        ? format(parseISO(order.end_date), 'dd/MM/yyyy')
        : null,
      canceled_dateFormated: order.canceled_at
        ? format(parseISO(order.canceled_at), 'dd/MM/yyyy')
        : null,
    }));
  }

  async function loadOrders() {
    const response = await api.get('orders', {
      params: page,
    });

    const data = formatDate(response.data);
    setOrders(data);
  }

  useEffect(() => {
    loadOrders(); // eslint-disable-next-line
  }, [page]);

  async function handleSearch(e) {
    const response = await api.get('orders', {
      params: {
        q: e.target.value,
      },
    });

    const data = formatDate(response.data);
    setOrders(data);
  }

  return (
    <Container>
      <OrderContent>
        <HeaderList title="Gerenciando Encomendas">
          <SearchInput
            type="text"
            placeholder="Buscar por encomendas"
            onChange={handleSearch}
          />
          <IconButton
            Icon={MdAdd}
            title="CADASTRAR"
            type="button"
            action={() => history.push('/encomenda')}
          />
        </HeaderList>

        <Table>
          <section>
            <strong>ID</strong>
            <strong>Produto</strong>
            <strong>Destinatário</strong>
            <strong>Entregador</strong>
            <strong>Cidade</strong>
            <strong>Estado</strong>
            <strong>Status</strong>
            <strong>Ações</strong>
          </section>
        </Table>
        {orders.map(order => (
          <EncomendasTabela
            key={order.id}
            data={order}
            updateOrder={loadOrders}
          />
        ))}
      </OrderContent>
    </Container>
  );
}
