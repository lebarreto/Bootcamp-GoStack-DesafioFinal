import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  align-self: center;
  margin-top: 100px;
`;

export const ProfileView = styled.View`
  margin-top: 80px;
  margin-bottom: 10px;
  margin-left: 50px;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #666666;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color: #444444;
  margin-bottom: 15px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 20px;
  align-items: center;
  margin-right: 50px;
  background: #e74040;
`;
