import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';
import Input from '~/components/Input';
// import { Container } from './styles';

const schemaValidator = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido!')
    .required('Email é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha precisa no mínimo 6 caracteres')
    .required('A senha é obrigatória!'),
  name: Yup.string().required('Nome é obrigatório!'),
});

export default function SignUp() {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      await schemaValidator.validate(data, {
        abortEarly: false,
      });
      console.tron.log(data);
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Cria conta</button>
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}
