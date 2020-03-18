import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background: #7d40e7;
  height: 155px;
`;

export const View = styled.View`
  width: 350px;
  height: 400px;
  margin: 40px auto;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
`;

export const TakePicture = styled(Button)`
  background: #7d40e7;
  margin: 20px 30px;
`;
