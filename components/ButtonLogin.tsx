import React from 'react';

import * as S from './ButtonLogin.styles';

type Props = {
  title: string;
  loading?: boolean;
};

const ButtonLogin = ({
  title,
  loading = false,
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <S.ButtonLogin>{loading ? <S.Loading /> : title}</S.ButtonLogin>;
};

export default ButtonLogin;
