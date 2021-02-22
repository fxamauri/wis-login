import React from 'react';

import * as S from './Input.styles';

type Props = {
  name: string;
  label?: string;
  isInvalid?: boolean;
  invalidMessage?: string;
};

const Input = ({
  name,
  label,
  isInvalid,
  invalidMessage = '',
  ...props
}: Props & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <S.Container>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputContainer isInvalid={isInvalid}>
        <S.InputStyled data-testid="input" name={name} {...props} />
        {isInvalid && <S.CloseIcon />}
      </S.InputContainer>
      {isInvalid && <S.ErrorMessage data-testid="input-message">{invalidMessage}</S.ErrorMessage>}
    </S.Container>
  );
};

export default Input;
