import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo_purple from '~/assets/logo_purple.svg';
import { Container, Content, Profile } from './styles';
import Notifications from '../Notifications';

export default function Header() {
  const { name, avatar } = useSelector(state => state.user.data);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo_purple} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>{name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src={
                avatar.url ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="Profile"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
