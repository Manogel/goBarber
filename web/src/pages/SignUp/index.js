import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import logo from '~/assets/logo.svg';
import Input from '~/components/Input';
// import { Container } from './styles';

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Cria conta</button>
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}
