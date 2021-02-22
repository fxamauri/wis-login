import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const Container = styled.div`
  margin: 10px 0;

  @media (max-width: 767px) {
    margin: 5px 0;
  }
`;

export const Label = styled.label`
  display: inline-block;
  margin: 0 0 10px 10px;
  text-transform: uppercase;

  @media (max-width: 767px) {
    font-size: 12px;
    margin: 0 0 8px 8px;
  }
`;

export const InputStyled = styled.input`
  padding: 15px;
  display: inline-block;
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  border-radius: 10px;
`;

interface InputContainerProps {
  isInvalid?: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => (props.isInvalid ? '#ff377f' : '#989fdb')};
  border-radius: 10px;
  background: #faf5ff;
`;

export const CloseIcon = styled(FaTimes).attrs(() => ({
  size: '15px',
}))`
  margin-right: 10px;
  color: #ff377f;
`;

export const ErrorMessage = styled.span`
  color: #ff377f;
  display: inline-block;
  margin: 10px 0 0 25px;
`;
