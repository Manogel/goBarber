import React from 'react';
import { View } from 'react-native';

import Background from '~/components/Background';
import Button from '~/components/Button';
import Input from '~/components/Input';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <Background>
      <Input icon="call" placeholder="Digite seu nome" />
      <Button>Entrar</Button>
    </Background>
  );
}
