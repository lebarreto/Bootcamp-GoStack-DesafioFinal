import React, { useRef, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { Container, Header, View, Camera, TakePicture } from './styles';
import api from '~/services/api';

export default function Confirm() {
  const ref = useRef();

  const routes = useRoute();
  const { data } = routes.params;

  const auth = useSelector(state => state.auth);
  const navigation = useNavigation();

  async function send() {
    if (ref) {
      const dataCam = await ref.current.takePictureAsync();

      console.tron.log('data', dataCam.uri);
      const file = new FormData();
      file.append('file', {
        type: 'image/jpg',
        uri: dataCam.uri,
        name: 'signature_id',
      });
      const response = await api.post('signatures', file);

      const date = new Date();
      const sigId = response.data.id;

      const signatureUploaded = await api.put(`orders/${data.id}`, {
        end_date: date,
        signature_id: sigId,
      });

      if (signatureUploaded) {
        navigation.navigate('Dashboard');
      }
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
