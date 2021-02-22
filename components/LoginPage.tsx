import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../actions';
import { AppState } from '../interfaces';
import * as S from './LoginPage.styles';
import Input from './Input';
import ButtonLogin from './ButtonLogin';
import LoginPageHeader from './LoginPageHeader';
import LoginPageForgotPassword from './LoginPageForgotPassword';

interface ErrorsState {
  email?: string;
  password?: string;
}

const LoginPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: AppState): boolean => state.loading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<ErrorsState>({});

  const validate = () => {
    const errors: ErrorsState = {};

    if (email.length === 0) {
      errors.email = 'O campo E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'E-mail inválido';
    }

    if (password.length === 0) {
      errors.password = 'O campo senha é obrigatório';
    }

    setErrors(errors);
    return !(!!errors.email || !!errors.password);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      dispatch(signInRequest(email, password));
    }
  };

  return (
    <S.Container>
      <S.BackgroundWoman />
      <S.LoginContainer>
        <S.ToLeftMediumScreenSizes>
          <S.LoginForm onSubmit={handleSubmit} data-testid="login-form">
            <S.LoginContent>
              <LoginPageHeader
                title="Olá, seja bem vindo!"
                subTitle="Para acessar a plataforma, faça seu login."
              />
              <S.FormGroup>
                <Input
                  name="email"
                  label="E-mail"
                  type="text"
                  placeholder="user.name@mail.com"
                  isInvalid={!!errors.email}
                  invalidMessage={errors.email}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </S.FormGroup>
              <S.FormGroup>
                <Input
                  name="password"
                  label="Senha"
                  type="password"
                  placeholder="*******"
                  isInvalid={!!errors.password}
                  invalidMessage={errors.password}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </S.FormGroup>
              <S.ButtonLoginSection>
                <ButtonLogin title="Entrar" loading={loading} />
                <LoginPageForgotPassword />
              </S.ButtonLoginSection>
            </S.LoginContent>
          </S.LoginForm>
        </S.ToLeftMediumScreenSizes>
      </S.LoginContainer>
    </S.Container>
  );
};
export default LoginPage;
