import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';

import {
  Container,
  Avatar,
  ProfileView,
  Label,
  Text,
  LogoutButton,
} from './styles';
import { signOut } from '~/store/modules/auth/actions';

export default function Profile() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.profile);

  const dateFormatted = format(parseISO(user.createdAt), 'dd/MM/yyyy');

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Avatar
        source={{ uri: `https://api.adorable.io/avatars/285/${user.name}.png` }}
      />
      <ProfileView>
        <Label>Nome completo</Label>
        <Text>{user.name}</Text>
        <Label>Email</Label>
        <Text>{user.email}</Text>
        <Label>Data de cadastro</Label>
        <Text>{dateFormatted}</Text>
        <LogoutButton onPress={handleLogout}>Log out</LogoutButton>
      </ProfileView>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
