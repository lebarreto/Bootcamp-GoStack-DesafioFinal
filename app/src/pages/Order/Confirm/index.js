import React, { useRef } from 'react';

import { Container, Header, View, Camera, TakePicture } from './styles';

export default function Confirm() {
  const ref = useRef();

  async function send() {
    if (ref) {
      const data = await ref.current.takePictureAsync();
      console.tron.log(data.uri);
    }
  }

  return (
    <Container>
      <Header>
        <View>
          <Camera ref={ref} captureAudio={false} type="back" />
        </View>
        <TakePicture onPress={send}>Enviar</TakePicture>
      </Header>
    </Container>
  );
}
