import styled from 'styled-components';

export const Container = styled.span`
  display: inline;
  font-weight: 400;
  color: #989fdb;
  text-align: center;
  font-size: 16px;
  margin: 0 10px;

  @media (max-width: 767px) {
    font-size: 12px;
    color: #ffffff;
  }

  a {
    color: #9626ac;
    text-decoration: underline;

    @media (max-width: 767px) {
      color: #ffffff;
    }
  }
`;
