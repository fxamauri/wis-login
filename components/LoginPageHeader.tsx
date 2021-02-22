import React from 'react';

import * as S from './LoginPageHeader.styles';

type Props = {
  title: string;
  subTitle: string;
};

const LoginPageHeader = ({ title, subTitle }: Props) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.Container>
  );
};

export default LoginPageHeader;
