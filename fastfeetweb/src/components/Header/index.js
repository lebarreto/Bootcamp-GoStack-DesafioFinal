import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Container, Content, Profile } from './styles';
import logo from '../../assets/fastfeet-logo.png';
import * as AuthActions from '../../store/modules/auth/actions';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(AuthActions.signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Fastfeet" />
          <hr />
          <Link to="/encomendas">ENCOMENDAS</Link>
          <Link to="/entregadores">ENTREGADORES</Link>
          <Link to="/destinatarios">DESTINATÁRIOS</Link>
          <Link to="/problemas">PROBLEMAS</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <button type="button" onClick={handleLogout}>
                {' '}
                Sair do FastFeet
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
