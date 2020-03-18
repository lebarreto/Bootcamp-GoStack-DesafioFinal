import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { Container, Form, InputForm, Header, SubmitButton } from './styles';
import { addProblemRequest } from '~/store/modules/problem/actions';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function InformProblem() {
  const dispatch = useDispatch();

  const routes = useRoute();
  const { data } = routes.params;

  const navigation = useNavigation();

  const [description, setDescription] = useState('');

  function handleSubmit(data, description) {
    dispatch(addProblemRequest({ data, description }));
    navigation.navigate('VisualizeProblems', { data, description });
  }

  return (
    <Container>
      <Header>
        <Form>
          <InputForm
            multiline
            placeholder="Inclua aqui o problema que ocorreu na entrega."
            value={description}
            onChangeText={setDescription}
          />
          <SubmitButton onPress={() => handleSubmit(data, description)}>
            Enviar
          </SubmitButton>
        </Form>
      </Header>
    </Container>
  );
}
