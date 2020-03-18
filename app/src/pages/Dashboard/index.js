import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, format } from 'date-fns';
import { useIsFocused } from '@react-navigation/native';

import {
  Container,
  Avatar,
  Label,
  Text,
  UserView,
  Header,
  LogoutButton,
  Nav,
  Title,
  NavOptions,
  Option,
  TextOption,
  BodyOrder,
} from './styles';
import { signOut } from '~/store/modules/auth/actions';
import api from '~/services/api';
import Orders from './Orders';

export default function Dashboard() {
  const isFocused = useIsFocused();

  const dispatch = useDispatch();

  const user = useSelector(state => state.user.profile);

  const [selected, setSelected] = useState(true);
  const [orders, setOrders] = useState([]);

  function handleLogout() {
    dispatch(signOut());
  }

  console.tron.log(selected);

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

  async function loadOrder() {
    if (selected) {
      const response = await api.get(
        `deliveryman/${user.id}/deliveries/pending`
      );
      const data = formatDate(response.data);
      setOrders(data);
    } else {
      const response = await api.get(
        `deliveryman/${user.id}/deliveries/delivered`
      );
      const data = formatDate(response.data);
      setOrders(data);
    }
  }

  useEffect(() => {
    loadOrder();
  }, [selected, user.id]);
  //{uri: `https://api.adorable.io/avatars/285/${user.name}.png`,}
  return (
    <Container>
      <Header>
        <Avatar
          source={{
            uri: user.avatar_id
              ? user.avatar.url
              : `https://api.adorable.io/avatars/285/${user.name}.png`,
          }}
        />
        <UserView>
          <Label>Bem vindo de volta,</Label>
          <Text>{user.name}</Text>
        </UserView>
        <LogoutButton onPress={handleLogout}>
          <Icon name="exit-to-app" size={25} color="#E74040" />
        </LogoutButton>
      </Header>
      <Nav>
        <Title>Entregas</Title>
        <NavOptions>
          <Option onPress={() => setSelected(true)}>
            <TextOption enabled={selected}>Pendentes</TextOption>
          </Option>
          <Option onPress={() => setSelected(false)}>
            <TextOption enabled={!selected}>Entregues</TextOption>
          </Option>
        </NavOptions>
      </Nav>
      {orders.length > 0 ? (
        <BodyOrder
          data={orders}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Orders data={item} />}
        />
      ) : null}
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
