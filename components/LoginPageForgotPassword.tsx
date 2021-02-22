import React from 'react';

import Link from 'next/link';
import * as S from './LoginPageForgotPassword.styles';

const LoginPageForgotPassword = () => {
  return (
    <S.Container>
      Esqueceu seu login ou senha? Clique{' '}
      <Link href="/">
        <a>aqui</a>
      </Link>
    </S.Container>
  );
};

export default LoginPageForgotPassword;
