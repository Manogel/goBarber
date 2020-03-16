import React from 'react';
import { Link } from 'react-router-dom';
import logo_purple from '~/assets/logo_purple.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo_purple} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Diego Fernandes</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Manogel"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
