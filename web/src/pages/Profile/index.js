import React, { useRef, useMemo } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './styles';
import Input from '~/components/Input';
import UserActions from '~/store/ducks/user';
import AvatarInput from './AvatarInput';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.data);

  const schemaValidator = useMemo(
    () =>
      Yup.object().shape({
        name: Yup.string().required('Email é obrigatório'),
        oldPassword: Yup.string().trim(),
        password: Yup.string()
          .trim()
          .when('oldPassword', (oldPassword, field) =>
            oldPassword
              ? field
                  .min(6, 'No mínimo 6 caracteres!')
                  .required('Você precisa informar a sua nova senha!')
              : field
          ),
        confirmPassword: Yup.string()
          .trim()
          .when('password', (password, field) =>
            password
              ? field
                  .required('Confirme sua nova senha')
                  .oneOf([Yup.ref('password')], 'Senhas não coincidem')
              : field
          ),
      }),
    []
  );

  const formRef = useRef(null);

  async function handleSubmit(data) {
    console.tron.log(data);

    try {
      await schemaValidator.validate(data, {
        abortEarly: false,
      });

      dispatch(UserActions.updateProfileRequest(data));
      formRef.current.setErrors({});
      formRef.current.clearValue('oldPassword');
      formRef.current.clearValue('password');
      formRef.current.clearValue('confirmPassword');
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
    <Container>
      <Form initialData={profile} ref={formRef} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome completo" />
        <Input
          name="email"
          type="email"
          placeholder="Seu endereço de e-mail"
          disabled="disabled"
        />
        <hr />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação se senha"
        />
        <button type="submit"> Atualizar perfil </button>
      </Form>
      <button type="button"> Sair do GoBarber </button>
    </Container>
  );
}
