import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background: #7d40e7;
  height: 155px;
`;

export const Form = styled.View`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-right: 30px;
`;

export const InputForm = styled.TextInput`
  margin-bottom: 10px;
  height: 400px;
  margin-top: 40px;
  justify-content: flex-start;
  background: #fff;
  border-radius: 4px;
  border: solid 1px #0000001a;
  font-size: 16px;
  color: #999999;
  font-weight: bold;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  background: #7d40e7;
`;
