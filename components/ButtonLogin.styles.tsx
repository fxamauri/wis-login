import styled, { keyframes } from 'styled-components';
import { AiOutlineLoading } from 'react-icons/ai';

export const ButtonLogin = styled.button`
  font-size: 16px;
  color: #ffffff;
  border-radius: 10px;
  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  font-weight: 600;
  text-transform: uppercase;
  padding: 15px;
  margin: 15px 0 22px 0;
  border: none;
  box-shadow: 0 10px 25px #cf99db;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 200px;
    box-shadow: none;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled(AiOutlineLoading).attrs(() => ({
  size: '14px',
}))`
  animation: ${rotate} 1s linear infinite;
`;
