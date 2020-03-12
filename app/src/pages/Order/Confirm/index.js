import React from 'react';
import { RNCamera } from 'react-native-camera';
import { View } from 'react-native';

import { Container, Header } from './styles';

export default function Confirm() {
  return (
    <Container>
      <Header>
        <View>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            captureAudio={false}
            iosCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          />
        </View>
      </Header>
    </Container>
  );
}
