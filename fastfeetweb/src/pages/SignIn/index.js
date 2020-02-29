import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '../../store/modules/auth/actions';
import logo from '../../assets/fastfeet-logo.png';
import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido!')
    .required('O email é obrigatório!'),
  password: Yup.string().required('A senha é obrigatória!'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <img src={logo} alt="FastFeet" />

        <p>SEU E-MAIL</p>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <p>SUA SENHA</p>
        <Input name="password" type="password" placeholder="*********" />
        <button type="submit">
          {loading ? 'Loading...' : 'Entrar no Sistema'}
        </button>
      </Form>
    </Container>
  );
}
